import{r as f,R as e}from"./iframe-BQY4vSXy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DT1QXVI3.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BdzVgEW0.js";import{C as k}from"./ComposedChart-B-_Frpte.js";import{X as K}from"./XAxis-DJU4Mvi4.js";import{L as v}from"./Legend-CiInds5Z.js";import{B as a}from"./Bar-DXAi6LTF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-mx5Rr5JL.js";import"./Text-CLBNZPUe.js";import"./resolveDefaultProps-G77sf460.js";import"./DOMUtils-fCmVDggT.js";import"./ZIndexLayer-CAJurUsW.js";import"./index-CQxQDYts.js";import"./index-D-_6MOIc.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bx2aNCzN.js";import"./throttle-CE5heSva.js";import"./axisSelectors-B45QX1Cb.js";import"./d3-scale-tF01g-yC.js";import"./CartesianAxis-DnyTGuRK.js";import"./Layer-AUPxKI27.js";import"./types-Mj5dcoaz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xQ-Bbda9.js";import"./index-CLE53NQ2.js";import"./index-CyLNMVoO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BcRxM-Av.js";import"./index-Bx1R-goW.js";import"./fillDefinitions-DSK0YdxC.js";import"./CartesianChart-r0bwZB67.js";import"./ZIndexPortal-CnsPtZ0q.js";import"./CategoricalChart-DH0FyAFC.js";import"./Symbols-yVk86yax.js";import"./symbol-DVGalN_0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CipAO92M.js";import"./uniqBy-CBH5ELrR.js";import"./iteratee-8DnRGbF4.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CALPxAES.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DmyfJlq7.js";import"./useAnimationId-qEoZ-4tT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jWDRV1_r.js";import"./tooltipContext-BdcFAaGm.js";import"./dataEntryStyles-CGibnImn.js";import"./ErrorBarContext-DajCWgNE.js";import"./activeStyles-BMraSVhQ.js";import"./SetGraphicalItem-DSqeiOP9.js";import"./getZIndexFromUnknown-qlZPh-zJ.js";import"./useEffectiveDataKey-DjptVWbj.js";import"./omit-CIBiIB-M.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
