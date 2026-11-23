import{r as f,R as e}from"./iframe-Knpgl7bH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BPwWglGS.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D_JvDPdC.js";import{C as k}from"./ComposedChart-Bz1qQazH.js";import{X as K}from"./XAxis-C-pGSkx8.js";import{L as v}from"./Legend-C_UgWS6K.js";import{B as a}from"./Bar-2zwBs7Gn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CUqt0NPv.js";import"./Text-2mzzLjyY.js";import"./resolveDefaultProps-E9uQbFMh.js";import"./ZIndexLayer-B7sLboyu.js";import"./index-CMcZZbu7.js";import"./index-flTgedm9.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-_ossNi2Y.js";import"./throttle-CxSZxpUT.js";import"./axisSelectors-DzWAhEt3.js";import"./d3-scale-loN--ZL0.js";import"./CartesianAxis-d_ZDtRCQ.js";import"./Layer-BPxKddK_.js";import"./types-TSpqzzom.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BhGylDYr.js";import"./index-DBy5LZ5m.js";import"./index-CtQ1gC2H.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-RFuLYV8r.js";import"./index-DCjquko5.js";import"./fillDefinitions-D-i4EmzR.js";import"./CartesianChart-BRDQdhrJ.js";import"./chartDataContext-DMJoTbMZ.js";import"./CategoricalChart-BP24IEWh.js";import"./Symbols-DbPd2MPF.js";import"./symbol-D5IcYaCj.js";import"./path-BBMZd4YL.js";import"./useElementOffset-lkTznI83.js";import"./uniqBy-BRZL2BBs.js";import"./iteratee-CHAMY_xX.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CP1LR4vd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DSFuXVLV.js";import"./useAnimationId-sq4gt-Rn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DmSfMRR5.js";import"./tooltipContext-BYlYvGUW.js";import"./ErrorBarContext-CNCcQkpF.js";import"./activeStyles-Dx-Bb5mv.js";import"./SetGraphicalItem-CJ2jMQXm.js";import"./getZIndexFromUnknown-O-sWbfWX.js";import"./useEffectiveDataKey-DbJ28nvU.js";import"./omit-BSmtl1Wb.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
