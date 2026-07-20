import{r as f,R as e}from"./iframe-E9cTKeRE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-F7YCqO7L.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DgjoBcM4.js";import{C as k}from"./ComposedChart-Blhk5iCf.js";import{X as K}from"./XAxis-rRrOlgKo.js";import{L as v}from"./Legend-CMoclERr.js";import{B as s}from"./Bar-D5mdgqCB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-X6rLp4nN.js";import"./Layer-gCSDlxX6.js";import"./resolveDefaultProps-VcEXnedp.js";import"./Text-Z5PFJcO5.js";import"./DOMUtils-7h76k5q7.js";import"./isWellBehavedNumber-CNJuLpb3.js";import"./Label-BpZfxLrK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-T104iiSj.js";import"./index-CXgkWbkn.js";import"./index-dTe_TrB1.js";import"./types-BiCnzAm7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-8_6vlRT3.js";import"./throttle-CGWlJj3Y.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-B1G603CI.js";import"./index-BKdHAXhr.js";import"./index-CCDqlq1e.js";import"./axisSelectors-Cz4e0hh2.js";import"./d3-scale-BKY6FaDv.js";import"./CartesianChart-h93kYpLN.js";import"./chartDataContext-BLSdU0GF.js";import"./CategoricalChart-Dgnr1Z5s.js";import"./Symbols-DI8xvNSa.js";import"./symbol-Xtd0tGJt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-VfA5vV.js";import"./uniqBy-BABLZnAx.js";import"./iteratee-CoZ1T3nQ.js";import"./tooltipContext-Dip-pauz.js";import"./AnimatedItems-B1DMV_LJ.js";import"./useAnimationId-DdQ6zElL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPcTji69.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D82Ok3yU.js";import"./RegisterGraphicalItemId-y5W6RdIF.js";import"./ErrorBarContext-CrHnHUPz.js";import"./GraphicalItemClipPath-BanWagPz.js";import"./SetGraphicalItem-i24-OBmJ.js";import"./getZIndexFromUnknown-CdNXl1gM.js";import"./graphicalItemSelectors-D0cXoEU9.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
