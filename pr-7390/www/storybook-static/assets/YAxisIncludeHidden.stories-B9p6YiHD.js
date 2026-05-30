import{P as f,c as e}from"./iframe-UCAhYs-z.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-COo7eY63.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-D1yLUW4N.js";import{C as k}from"./ComposedChart-Z0W1ZhiK.js";import{X as K}from"./XAxis-DQ_rFapE.js";import{L as v}from"./Legend-CS02EQFH.js";import{B as s}from"./Bar-9Zu4jCDx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-_XX617w0.js";import"./CartesianAxis-UsQkFlnQ.js";import"./Layer-BbZFEpf4.js";import"./resolveDefaultProps-x5qwSX1Y.js";import"./Text-Rw6qQ1RF.js";import"./DOMUtils-BWCSYHt1.js";import"./isWellBehavedNumber-km_cSMyX.js";import"./Label-CtGR-die.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CEmXwARt.js";import"./index-DNUUkfMj.js";import"./index-DUfS7S-b.js";import"./types-tyluCCo2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-c5635lKm.js";import"./immer-C7lWlBZP.js";import"./RechartsWrapper-DH9U6NxN.js";import"./index-CWyZ4H7B.js";import"./index-CgqmNVZ9.js";import"./axisSelectors-DDRfemS2.js";import"./d3-scale-4iD7H2_D.js";import"./CartesianChart-W_64lWDO.js";import"./chartDataContext-tDfcFOTc.js";import"./CategoricalChart-D1LSz5Gs.js";import"./Symbols-Dq91fqfs.js";import"./symbol-C_PlBh2T.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DDgeNPdG.js";import"./uniqBy-BLPksq8r.js";import"./iteratee-Djf5ohSS.js";import"./tooltipContext-BjQ73eS5.js";import"./ReactUtils-CzulCaS-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_bYQmpgX.js";import"./useAnimationId-BjOATGeC.js";import"./ActiveShapeUtils-BWM9wxaW.js";import"./RegisterGraphicalItemId-ByRoWgeN.js";import"./ErrorBarContext-Cvfv4OR0.js";import"./GraphicalItemClipPath-C-wdvxqO.js";import"./SetGraphicalItem-X5GoC_bE.js";import"./getZIndexFromUnknown-mCZj_BBm.js";import"./graphicalItemSelectors-BSW7Id0m.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
