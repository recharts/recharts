import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,R as i,Vn as a,W as o,kn as s,t as c,u as l}from"./iframe-BqVvK_R4.js";import{t as u}from"./data-J2vpPkF6.js";import{r as d}from"./Page-C0w_0_Yr.js";import{n as f,t as p}from"./utils-4uF5A2JM.js";import{n as m,t as h}from"./YAxisArgs-yPWmA9Ka.js";var g,_,v,y;e((()=>{g=t(n()),c(),u(),f(),m(),_={component:i,argTypes:h,title:`Examples/cartesian/YAxis/WithIncludeHidden`},v={render:()=>{let[e,t]=(0,g.useState)(Object.keys(d[0]));return g.createElement(g.Fragment,null,g.createElement(`h4`,null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),g.createElement(a,{width:`100%`,height:500},g.createElement(l,{data:d},g.createElement(r,{dataKey:`name`,scale:`band`}),g.createElement(i,{includeHidden:!0}),g.createElement(s,{onClick:e=>{let n=e.dataKey;t(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])}}),g.createElement(o,{dataKey:`pv`,fill:`blue`,hide:!e.includes(`pv`)}),g.createElement(o,{dataKey:`amt`,fill:`green`,hide:!e.includes(`amt`)}))))},args:p(h)},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...v.parameters?.docs?.source}}},y=[`WithIncludeHidden`]}))();export{v as WithIncludeHidden,y as __namedExportsOrder,_ as default};