import{r as f,R as e}from"./iframe-BhkmDUK8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CXhwTwOE.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cx3NgCbD.js";import{C as k}from"./ComposedChart-BfTAH9AC.js";import{X as K}from"./XAxis-C6NctsPw.js";import{L as v}from"./Legend-BN2PSvXd.js";import{B as a}from"./Bar-mg0AFLko.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BVWylkM-.js";import"./Text-DMX7oKTI.js";import"./resolveDefaultProps-CBrUOLtb.js";import"./pageBackground-4Wz1Kk9n.js";import"./ZIndexLayer-CK_kCyLL.js";import"./index-BGM2KozU.js";import"./index-Co7lnbSI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BxjhUIGd.js";import"./throttle-BvBRI7mu.js";import"./dataEntryStyles-BVrjnugi.js";import"./axisSelectors-iANbDNdr.js";import"./d3-scale-6P_5w6kZ.js";import"./CartesianAxis-BmcJMrp5.js";import"./Layer-DN_2iRDC.js";import"./types-CU7_71qS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaGEcMV8.js";import"./index-CMvdSvcn.js";import"./index-DbiGNxfl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DFqlV8En.js";import"./index-EMj2ovmv.js";import"./CartesianChart-DAEGsrX3.js";import"./ZIndexPortal-B4U04QBk.js";import"./CategoricalChart-DsbjL1iZ.js";import"./Symbols-DztLe2AE.js";import"./symbol-C9i3gtuu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ButFEXKE.js";import"./uniqBy-DG4g_Lj4.js";import"./iteratee-B9qR9krY.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CB1bAazX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CulpOJA0.js";import"./useAnimationId-49rixTyB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRwsgq7-.js";import"./tooltipContext-W-jQ97Ft.js";import"./RegisterGraphicalItemId-BQIh3gpM.js";import"./ErrorBarContext-BtfMVugS.js";import"./activeStyles-Bn41iv6z.js";import"./SetGraphicalItem-B5IS3skS.js";import"./getZIndexFromUnknown-BQ3YpVib.js";import"./useEffectiveDataKey-C5G10thl.js";import"./omit-DVpTfk6D.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
