import{r as f,R as e}from"./iframe-Bi3q5ica.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C54oD4nc.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-3OSmdeIU.js";import{C as k}from"./ComposedChart-BJ-4k_4i.js";import{X as K}from"./XAxis-hhEBl8YN.js";import{L as v}from"./Legend-CKkxm3dE.js";import{B as a}from"./Bar-B1zveR3y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BY0KH6BI.js";import"./Text-Dc41Ok3C.js";import"./resolveDefaultProps-DHzWDEtS.js";import"./DOMUtils-Daz026gj.js";import"./isWellBehavedNumber-DYrnpjB-.js";import"./useId-WQ4DmC28.js";import"./useBackwardsCompatibleTheme-CbD5lCDD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D_YH5dyV.js";import"./index-B0qzmCsN.js";import"./index-BFXu3aHt.js";import"./RechartsWrapper-BIVD6JFp.js";import"./axisSelectors-BxvzYEcA.js";import"./throttle-CZI3Ns_R.js";import"./d3-scale-Dy9_TWZx.js";import"./index-ngMl_c_9.js";import"./index-BUn-OEAP.js";import"./renderedTicksSlice-DRFwN4j3.js";import"./index-BVwc-Jau.js";import"./CartesianAxis-BXx4NBAG.js";import"./Layer-CtQIi_dM.js";import"./types-3e9Y1DlN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dl2J0BS7.js";import"./chartDataContext-D-hMyVvi.js";import"./CategoricalChart-hTIoEyr2.js";import"./Symbols-DqOq9bgq.js";import"./symbol-DuoL-nUS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cv1kBb51.js";import"./uniqBy-DtuySXID.js";import"./iteratee-9Tj9By3u.js";import"./AnimatedItems-C5QOwiw_.js";import"./useAnimationId-Wfo4M9rJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CfISYkIx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMwbxzD5.js";import"./tooltipContext-CRe5fb94.js";import"./RegisterGraphicalItemId-DY8suQGI.js";import"./ErrorBarContext-Tsgmsoyf.js";import"./GraphicalItemClipPath-DaMNa-IP.js";import"./SetGraphicalItem-ChWBfBoT.js";import"./getZIndexFromUnknown-DDPl0Fuw.js";import"./useGraphicalItemIdentity-BkNHKZMP.js";import"./dataEntryStyles-CD1lWBWh.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
