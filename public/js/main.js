const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const tep_real_val = document.getElementById('tep_real_val');

const dataHide = document.querySelector('.middle_layer')


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `plz write the name before search`;
        dataHide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=571adededac71469d301c12e8a481c32`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`
            tep_real_val.innerText = arrdata[0].main.temp;


            const tempMood = arrdata[0].weather[0].main;

            if (tempMood === "clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            } else if (tempMood === "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            } else if (tempMood === "Rain") {
                temp_status.innerHTML = "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            dataHide.classList.remove('data_hide');
        }
        catch {
            city_name.innerText = `plz enter the city name properly`;
            dataHide.classList.add('data_hide');
        }


    }
}

submitBtn.addEventListener('click', getInfo);

