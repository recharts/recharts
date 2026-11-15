import{r as f,R as e}from"./iframe-BEGj1koH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-pWnSqNwD.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CEJVfddR.js";import{C as k}from"./ComposedChart-Bzc4T97f.js";import{X as K}from"./XAxis-A5l93qYr.js";import{L as v}from"./Legend-BGEPhXJp.js";import{B as a}from"./Bar-cVcoJ5om.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D38IadvQ.js";import"./Text-DjwfkybI.js";import"./resolveDefaultProps-BYyXPZU-.js";import"./ZIndexLayer-DF1RNmQW.js";import"./index-DDO4uWer.js";import"./index-DR0rd1FX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bip_MddP.js";import"./throttle-9RbVUj4o.js";import"./axisSelectors-DNGVPDPw.js";import"./d3-scale-80plsouy.js";import"./CartesianAxis-DbfSB8D9.js";import"./Layer-C55olOZb.js";import"./types-DoIEZrXt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kRCXaW-h.js";import"./index-BjkAsnz4.js";import"./index-OAXr3uJt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DyBgNckc.js";import"./index-CMfsitJi.js";import"./fillDefinitions-CBOLnqU9.js";import"./CartesianChart-Ct1jbJB4.js";import"./chartDataContext-CTuyBUPX.js";import"./CategoricalChart-DExcD38L.js";import"./Symbols-B6OXEcw9.js";import"./symbol-Bug6GalK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CiV49lwO.js";import"./uniqBy-C61gVEFe.js";import"./iteratee-BOHATSs8.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-D0L-GBmA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Br2C5RSL.js";import"./useAnimationId-Dz0dpT6V.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CbYiWbjj.js";import"./tooltipContext-BmWDHX9R.js";import"./ErrorBarContext-DjI-jDw7.js";import"./activeStyles-BAv2bBi7.js";import"./SetGraphicalItem-CZ4dqLwM.js";import"./getZIndexFromUnknown-BID1aVec.js";import"./useEffectiveDataKey-Dgv3FRKU.js";import"./omit-N8syEmp0.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
