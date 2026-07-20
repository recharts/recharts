import{r as f,R as e}from"./iframe-3EJ0a-7l.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DWgMRUiY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-c2FXiYNl.js";import{C as k}from"./ComposedChart-D-953FuV.js";import{X as K}from"./XAxis-C3QGe7ZQ.js";import{L as v}from"./Legend-DLd4l6Y5.js";import{B as s}from"./Bar-4WXwf4mw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bfa5m128.js";import"./Layer-DpkyIzcZ.js";import"./resolveDefaultProps-BuDtgz7X.js";import"./Text-Tcv7e8Zm.js";import"./DOMUtils-DXgkUmDa.js";import"./isWellBehavedNumber-BhkIWxYY.js";import"./Label-C0w-bdKA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DNvDkown.js";import"./index-0T8Ohuwb.js";import"./index-Bew5wRIt.js";import"./types-CU0G9DUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-gv74no8c.js";import"./throttle-CPX4UzZG.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Bn0d5D9a.js";import"./index-BjSUzMQ4.js";import"./index-tuDXSbu0.js";import"./axisSelectors-Bmyn61pB.js";import"./d3-scale-iKC8386d.js";import"./CartesianChart-BDgOOMut.js";import"./chartDataContext-D6a_Yhjw.js";import"./CategoricalChart-CxrO1b6T.js";import"./Symbols-BSONYbmQ.js";import"./symbol-C2xiebrn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-9xxsp0Py.js";import"./uniqBy-CgpcgpAe.js";import"./iteratee-CsQVFiVH.js";import"./tooltipContext-DYh9IZNi.js";import"./AnimatedItems-_aFnnDci.js";import"./useAnimationId-BfMO6PtV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CVPfCn-u.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cy1FCqFR.js";import"./RegisterGraphicalItemId-DGaDllRs.js";import"./ErrorBarContext-BbLTkDCO.js";import"./GraphicalItemClipPath-BH3HlCRV.js";import"./SetGraphicalItem-BJF2lEB0.js";import"./getZIndexFromUnknown-BG6YC5Um.js";import"./graphicalItemSelectors-B05IV_cU.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
