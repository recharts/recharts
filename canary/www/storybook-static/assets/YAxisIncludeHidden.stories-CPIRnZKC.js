import{r as f,R as e}from"./iframe-Be1JwYLB.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-B8XW_V0R.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CgSPm-wc.js";import{C as k}from"./ComposedChart-aW1EvLk8.js";import{X as K}from"./XAxis-BsHOKRoe.js";import{L as v}from"./Legend-CdT5XdlY.js";import{B as a}from"./Bar-D0_Qv8Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-vtDVNmS9.js";import"./get-CjriyByo.js";import"./Label-Cm4G9M_4.js";import"./Text-BqUDv62U.js";import"./ZIndexLayer-ByAD4IkB.js";import"./index-ueUT9Xj6.js";import"./index-Bkv44dvd.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-petp68tp.js";import"./throttle-DjxQctYo.js";import"./axisSelectors-rS5FKSRX.js";import"./d3-scale-C_iM0uvU.js";import"./CartesianAxis-CBnwQrVI.js";import"./Layer-L6JSSqUT.js";import"./types-DiTos3ch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DiKCMxPA.js";import"./index-Dg9s7T6j.js";import"./index-m2EJzzBW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BztyyuwI.js";import"./index-B-llFuKq.js";import"./fillDefinitions-Be1jCOoc.js";import"./CartesianChart-C7B4dY_Y.js";import"./chartDataContext-DDExTKyo.js";import"./CategoricalChart-C-aFkl_F.js";import"./Symbols-34MkMdpP.js";import"./symbol-CfD9aVNT.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BXttSKBy.js";import"./uniqBy-CpAKF5a4.js";import"./iteratee-Bcb_cbmN.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BkzBQ6X2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bp6UvdPI.js";import"./useAnimationId-DZ7icYC0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C6jNLipX.js";import"./tooltipContext-Q0tCFVpq.js";import"./ErrorBarContext-CuYC5cVX.js";import"./activeStyles-CdOMMJXp.js";import"./SetGraphicalItem-CZx3vw8X.js";import"./getZIndexFromUnknown-XUvIdfpL.js";import"./useEffectiveDataKey-dwd_hOHx.js";import"./omit-CPopItf9.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
