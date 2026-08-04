import{r as f,R as e}from"./iframe-8y2_-y0l.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cka8X-Di.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D_xG4Od1.js";import{C as k}from"./ComposedChart-k0StXg-x.js";import{X as K}from"./XAxis-C-STHEWl.js";import{L as v}from"./Legend-BERrS3MS.js";import{B as s}from"./Bar-ImVrJHZO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DkE66McM.js";import"./Text-DSeRyRP0.js";import"./resolveDefaultProps-Dr9m88pQ.js";import"./DOMUtils-BWSGK_7w.js";import"./isWellBehavedNumber-CdgGUQY1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Db2-KFbv.js";import"./index-DRQy4x13.js";import"./index-BErx7veh.js";import"./RechartsWrapper-B7Kkv9qM.js";import"./index-DMzHieur.js";import"./index-4aNbOO2K.js";import"./throttle-vJw1Gj7e.js";import"./renderedTicksSlice-CEAAcomA.js";import"./axisSelectors-CSK4MjLf.js";import"./d3-scale-U7OEzOLT.js";import"./CartesianAxis-Dxt7VdA8.js";import"./Layer-Bx7fY7lj.js";import"./types-BqBuCCYn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-D6NJDAxr.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CB-6O5b4.js";import"./chartDataContext-CRN46eEy.js";import"./CategoricalChart-CTEs6pXe.js";import"./Symbols-DT910lYp.js";import"./symbol-B3ZeMIeQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CCRtAZkL.js";import"./uniqBy-CU4rcLT3.js";import"./iteratee-CmpuqRan.js";import"./tooltipContext-DZvSZZn_.js";import"./AnimatedItems-D2ax0Lv8.js";import"./useAnimationId-Cseq293z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B1X6Uqlr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bx5pmo_f.js";import"./RegisterGraphicalItemId-CtYEtvHk.js";import"./ErrorBarContext-CT8kogTh.js";import"./GraphicalItemClipPath-CtYHN7Zm.js";import"./SetGraphicalItem-DMAc9VE6.js";import"./getZIndexFromUnknown-HhGgA3fQ.js";import"./graphicalItemSelectors-VMpb89rj.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
