import{r as f,R as e}from"./iframe-aNoK1EMe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-flrMIfza.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DOhDXvjb.js";import{C as k}from"./ComposedChart-ciK3m7lP.js";import{X as K}from"./XAxis-BsEbRcU-.js";import{L as v}from"./Legend-DY60V5f9.js";import{B as s}from"./Bar-a0LmDLx9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CeEjLShX.js";import"./Layer-BCtIHmhS.js";import"./resolveDefaultProps-DbC1kYAP.js";import"./Text-Dek-bfvO.js";import"./DOMUtils-B40T5FB1.js";import"./isWellBehavedNumber-DwwkvD-i.js";import"./Label-DiB3OAIB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGcx9JLL.js";import"./index-DU0cxzai.js";import"./index-Bu0CjtZ3.js";import"./types-Be_2sCPa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D-IRHrV3.js";import"./throttle-dDtgRmGr.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-k_DNRHdW.js";import"./index-D5XON-Gh.js";import"./index-BdDC1fi3.js";import"./axisSelectors-Bs_-tFvB.js";import"./d3-scale-_Xy_yJsZ.js";import"./CartesianChart-9qcKzyck.js";import"./chartDataContext-DZNoVeTg.js";import"./CategoricalChart-xLJxNslX.js";import"./Symbols-C4JyYuKh.js";import"./symbol-DCUtDS89.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BI3734qt.js";import"./uniqBy-Bcy6VBQs.js";import"./iteratee-BF5VjlC5.js";import"./tooltipContext-BxLcGZlQ.js";import"./AnimatedItems-b0afIUOt.js";import"./useAnimationId-B-ZOGiBc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DLQWIh8f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWDfkNMB.js";import"./RegisterGraphicalItemId-DSvg4gFN.js";import"./ErrorBarContext-Dauct7TC.js";import"./GraphicalItemClipPath-De0s7P9u.js";import"./SetGraphicalItem-CpE1XAUN.js";import"./getZIndexFromUnknown-CygBPzgc.js";import"./graphicalItemSelectors-DmUYu0MJ.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
