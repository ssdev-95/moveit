import style from '../styles/components/ExperienceBar.module.css';

export function Experiencebar() {
  return (
    <header className={ style.experienceBar }>
      <span>0 xp</span>
      <div >
        <div style={{ width: '50%' }}/>

        <span className={ style.currentExperience } style={{ left: '50%' }}>
          380 xp
        </span>
      </div>
      <span>680 xp</span>
    </header>
  );
}
