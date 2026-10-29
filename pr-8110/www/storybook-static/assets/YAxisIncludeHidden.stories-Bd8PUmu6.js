import{r as f,R as e}from"./iframe-EeI-1j8u.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BRal3r11.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DHZxeEos.js";import{C as k}from"./ComposedChart-pRvTQeS0.js";import{X as K}from"./XAxis-CIWygb1G.js";import{L as v}from"./Legend-BgI5LjXY.js";import{B as a}from"./Bar-J9fPx4i9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BhnhNpXu.js";import"./Text-BY4Mp6iu.js";import"./resolveDefaultProps-nYBnVSVd.js";import"./DOMUtils-CO7WypWi.js";import"./ZIndexLayer-D_EbKSUX.js";import"./index-pgwVXRJO.js";import"./index-jJDdBZp4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D7djmlhq.js";import"./throttle-CXPRMSpL.js";import"./axisSelectors-Cv1-8nVO.js";import"./d3-scale-DCtxOwfO.js";import"./CartesianAxis-Qxk-B3SK.js";import"./Layer-U6GYHWx5.js";import"./types-DqUdmTjU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Y-CkzfGU.js";import"./index-BylysGcb.js";import"./index-BCOZ7QjH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BS1aWGo0.js";import"./index-DKT02nAj.js";import"./CartesianChart-e1TnBbHn.js";import"./ZIndexPortal-pivMB2CQ.js";import"./CategoricalChart-BQ46uFlP.js";import"./Symbols-CDnC4YnR.js";import"./symbol-DRSGvgE-.js";import"./path-DyVhHtw_.js";import"./FillDefinition-DuMwyIxx.js";import"./dataEntryStyles-RarJtqD3.js";import"./useElementOffset-BM2TfUnu.js";import"./uniqBy-v3RdXdow.js";import"./iteratee-BmmzoLEb.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D0m07rKR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCoDLphy.js";import"./useAnimationId-CIis84-o.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2Xd3mgO.js";import"./tooltipContext-C5ItyuzL.js";import"./ErrorBarContext-Cxsgmfrf.js";import"./activeStyles-T-Ne1kjI.js";import"./SetGraphicalItem-DIh7Z4HQ.js";import"./getZIndexFromUnknown-B1ltCxHN.js";import"./useEffectiveDataKey-Ce4gQ9XU.js";import"./omit-CKFdUnHM.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
