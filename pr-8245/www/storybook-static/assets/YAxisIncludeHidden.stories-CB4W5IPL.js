import{r as f,R as e}from"./iframe-B7zNIrOO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DDLRqqCt.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BrXa08HH.js";import{C as k}from"./ComposedChart-CwA4XzeT.js";import{X as K}from"./XAxis-vwLDX7Ct.js";import{L as v}from"./Legend-BfEcUSQ1.js";import{B as a}from"./Bar-DZHPSpY2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Chg26k5h.js";import"./Text-RcA031Tp.js";import"./resolveDefaultProps-DItvlha8.js";import"./ZIndexLayer-wE65zH98.js";import"./index-DPky1fKm.js";import"./index-DeW5qBsv.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DMv2prKV.js";import"./throttle-eF_Q2QNr.js";import"./axisSelectors-BpHmVUrQ.js";import"./d3-scale-Ctmq2SXE.js";import"./CartesianAxis-_HHYfvE8.js";import"./Layer-_oO_qD0a.js";import"./types-Byak9pOA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaWHA44G.js";import"./index-DvJGiIdF.js";import"./index-CSG1xziR.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BpqvgZcQ.js";import"./index-Bmy_tuVE.js";import"./fillDefinitions-BcvXO95l.js";import"./CartesianChart-DD-p_bEO.js";import"./chartDataContext-BXscOHGM.js";import"./CategoricalChart-eJZPSIID.js";import"./Symbols-FG4gFplx.js";import"./symbol-DWqvgSCA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ch1zQzym.js";import"./uniqBy-g_uehvzu.js";import"./iteratee-DcFC9bTU.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-m9rMNboQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CoacEEbH.js";import"./useAnimationId-kE9HxpHZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLU25TzO.js";import"./tooltipContext-DDAvLrtp.js";import"./ErrorBarContext-Dk6Rlq45.js";import"./activeStyles-CDe2Kb4I.js";import"./SetGraphicalItem-CoOgwPlc.js";import"./getZIndexFromUnknown-DfUwzTSK.js";import"./useEffectiveDataKey-CezGQrGJ.js";import"./omit-CHt4C0-Q.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
