import{r as f,R as e}from"./iframe-MCQmK-TG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BUA5jm-O.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BMHpWHLe.js";import{C as k}from"./ComposedChart-CupTaTlB.js";import{X as K}from"./XAxis-xj8vDJ23.js";import{L as v}from"./Legend-Vw1i6A5_.js";import{B as s}from"./Bar-D1D6Sazc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B42rFi6U.js";import"./Layer-BUisE7Gh.js";import"./resolveDefaultProps-DF8ch7IU.js";import"./Text-LGFyNulV.js";import"./DOMUtils-DeN2A_86.js";import"./isWellBehavedNumber-DF6QZ0lN.js";import"./Label-DaldQZFv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnKxJfbB.js";import"./index-iUk-FcRS.js";import"./index-CGFRGdbT.js";import"./types-Cz27ONEA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-5teDD8C_.js";import"./throttle-exFJ19dN.js";import"./RechartsWrapper-CSMirUgA.js";import"./index-DCwDEUXM.js";import"./index-4hl_PvHL.js";import"./axisSelectors-t6G1HMN1.js";import"./d3-scale-1trsZxCl.js";import"./CartesianChart-CbiEQRIX.js";import"./chartDataContext-oq73vT2r.js";import"./CategoricalChart-DG8zA7C6.js";import"./Symbols-D248hYs2.js";import"./symbol-C8I9OgJ7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-IqQ0qYQD.js";import"./uniqBy-9wyvpuL-.js";import"./iteratee-D6dL79SH.js";import"./tooltipContext-DWjYKNyH.js";import"./AnimatedItems-Z_ZNAYUP.js";import"./useAnimationId-Ptyt1Cmf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dp_gpqgG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJxvN-bC.js";import"./RegisterGraphicalItemId-CwAmMMrt.js";import"./ErrorBarContext-7PhmiQse.js";import"./GraphicalItemClipPath-BDardp6y.js";import"./SetGraphicalItem-RVuvzcbz.js";import"./getZIndexFromUnknown-DuwgLHw0.js";import"./graphicalItemSelectors-DTYEBY2T.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
