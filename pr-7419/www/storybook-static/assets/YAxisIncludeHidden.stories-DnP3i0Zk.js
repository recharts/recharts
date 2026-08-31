import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./Legend-DiG0OfkN.js";import{n as s,t as c}from"./Bar-CML54h_E.js";import{n as l,t as u}from"./XAxis-B3WODRl4.js";import{n as d,t as f}from"./YAxis-CZypjyHs.js";import{n as p,t as m}from"./ComposedChart-BSnkeRRU.js";import{r as h,t as g}from"./Page-DUsfWi7y.js";import{n as _,t as v}from"./utils-vqcWnakT.js";import{n as y,t as b}from"./YAxisArgs-CVzi3wci.js";var x,S,C,w;function T(){return(T=t((()=>{x=e(n()),p(),l(),s(),i(),d(),a(),g(),_(),y(),S={component:f,argTypes:b,title:`Examples/cartesian/YAxis/WithIncludeHidden`},C={render:()=>{let e=Object.keys(h[0]),[t,n]=(0,x.useState)(e);return x.createElement(x.Fragment,null,x.createElement(`h4`,null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),x.createElement(r,{width:`100%`,height:500},x.createElement(m,{data:h},x.createElement(u,{dataKey:`name`,scale:`band`}),x.createElement(f,{includeHidden:!0}),x.createElement(o,{onClick:e=>{let t=e.dataKey;n(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t])}}),x.createElement(c,{dataKey:`pv`,fill:`blue`,hide:!t.includes(`pv`)}),x.createElement(c,{dataKey:`amt`,fill:`green`,hide:!t.includes(`amt`)}))))},args:v(b)},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`WithIncludeHidden`]})))()}T();export{C as WithIncludeHidden,w as __namedExportsOrder,S as default};