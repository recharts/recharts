import{r as f,R as e}from"./iframe-kr7fVjhm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BoMreVA5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BZPaZoVE.js";import{C as k}from"./ComposedChart-C2Jq_jCe.js";import{X as K}from"./XAxis-DuCvvYgu.js";import{L as v}from"./Legend-DaaANHpW.js";import{B as s}from"./Bar-CC7FIpFT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Clowvj21.js";import"./CartesianAxis-BtEPbzKb.js";import"./Layer-BpeNKyUn.js";import"./resolveDefaultProps-B2SvaHgo.js";import"./Text-DjM5ugTe.js";import"./DOMUtils-C68MxIVY.js";import"./isWellBehavedNumber-Dgwr4Y0K.js";import"./Label-BzX4e21C.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DgDl0x_M.js";import"./index-D2MHq5Hk.js";import"./index-B4gF14t1.js";import"./types-BF09pdOO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DSu7HAeh.js";import"./throttle-D_awpPCx.js";import"./RechartsWrapper-BXLkHwYV.js";import"./index-Bi4GHbSg.js";import"./index-C_7j0jGJ.js";import"./axisSelectors-C6aKDGBg.js";import"./d3-scale-D8KPLyuv.js";import"./CartesianChart-xwjZDYjt.js";import"./chartDataContext-CX_0Naaw.js";import"./CategoricalChart-Bef2xtAx.js";import"./Symbols-KemAPzJP.js";import"./symbol-eaW9wbCt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CARKZxzP.js";import"./uniqBy-DyaTa3fk.js";import"./iteratee-Bt60GMeU.js";import"./tooltipContext-Q_MtGo3C.js";import"./AnimatedItems-DqhNqm_F.js";import"./useAnimationId-D5l55oDh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DH_b4CsR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcRBgo4o.js";import"./RegisterGraphicalItemId-fKNs0JEp.js";import"./ErrorBarContext-CdB9Q1sE.js";import"./GraphicalItemClipPath-BFOwa2gv.js";import"./SetGraphicalItem-CV-IUFmw.js";import"./getZIndexFromUnknown-owanYJoE.js";import"./graphicalItemSelectors-Dqj-Zp-w.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
