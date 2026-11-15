import{r as f,R as e}from"./iframe-Bah9cDPf.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-I4iqsmgp.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D6NwopLq.js";import{C as k}from"./ComposedChart-082vf-Dq.js";import{X as K}from"./XAxis-CUlouZeJ.js";import{L as v}from"./Legend-BjuW9Ec3.js";import{B as a}from"./Bar-CQ384sUE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BLtLxFh_.js";import"./Text-Ct-0y4jN.js";import"./resolveDefaultProps-zC5o00WN.js";import"./ZIndexLayer-DdBSJIQM.js";import"./index-D6Fwvcda.js";import"./index-CvqzOiHn.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CEDelL9A.js";import"./throttle-BjlLZ4wO.js";import"./axisSelectors-BJF83DO6.js";import"./d3-scale-BLITEdPK.js";import"./CartesianAxis-Bt_lCqiI.js";import"./Layer-CD06LZri.js";import"./types-C6A66RfZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiPoI8vI.js";import"./index-FRb1AgAe.js";import"./index-CadkBFdQ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CuqmEJPa.js";import"./index-flr5alNa.js";import"./fillDefinitions-BbHKQE2Y.js";import"./CartesianChart-DT-YIr9t.js";import"./chartDataContext-9AmAFOH8.js";import"./CategoricalChart-DcONsU4c.js";import"./Symbols-CAXKij6d.js";import"./symbol-BgjIZi1V.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bd4rfpxM.js";import"./uniqBy-xNCP_Qij.js";import"./iteratee-C8Fc8Asa.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BkXi-SmE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C-T60wMT.js";import"./useAnimationId-DEYdhNFn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHFZOTDo.js";import"./tooltipContext-NMmUXLpN.js";import"./ErrorBarContext-BtmuWUeb.js";import"./activeStyles-C-zEEDQQ.js";import"./SetGraphicalItem-DSHrOFY_.js";import"./getZIndexFromUnknown-CKMf31u1.js";import"./useEffectiveDataKey-cBqedM3V.js";import"./omit-C3tmWtq5.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
