import{r as f,e}from"./iframe-DS-q9W3A.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-Dl_2Ddpc.js";import{R as C}from"./arrayEqualityCheck-uWyKn9kd.js";import{C as K}from"./ComposedChart-yx9oYSVL.js";import{X as A}from"./XAxis-B6LMs64M.js";import{L as v}from"./Legend-BCirtqrw.js";import{B as a}from"./Bar-CojX1I1J.js";import{R as x}from"./RechartsHookInspector-BZrvl649.js";import{p as s}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-DgJToWvf.js";import"./CartesianAxis-X7LfxDL5.js";import"./Layer-DiJfTFFC.js";import"./Text-BKgeGCuD.js";import"./DOMUtils-BrAhpHFL.js";import"./Label-C1I_KKaa.js";import"./PolarUtils-COCiu7Zk.js";import"./ZIndexLayer-DOFsbkoZ.js";import"./zIndexSlice-B8xvBtUi.js";import"./types-COe7SjWu.js";import"./hooks-CZGKc29x.js";import"./axisSelectors-CEsznBop.js";import"./RechartsWrapper-DIeOkYNI.js";import"./CartesianChart-BrZvalbT.js";import"./chartDataContext-CBbbKlpZ.js";import"./CategoricalChart-KA7oDakA.js";import"./Symbols-CinIOzBd.js";import"./Curve-MfRfs5dU.js";import"./useElementOffset-D8o8xmBk.js";import"./iteratee-B2_klWfa.js";import"./tooltipContext-Ba-hLNMx.js";import"./ReactUtils-W1w-s9kx.js";import"./ActiveShapeUtils-BebX3teJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DbmbV7wJ.js";import"./useAnimationId-T15aFfwj.js";import"./Trapezoid-Durh076j.js";import"./Sector-Dl9Lnkss.js";import"./RegisterGraphicalItemId-taQunXs-.js";import"./ErrorBarContext-BpDrXqd4.js";import"./GraphicalItemClipPath-gv1wFvhy.js";import"./SetGraphicalItem-nVnJshTd.js";import"./getZIndexFromUnknown-BB1jQdnK.js";import"./graphicalItemSelectors-DgdLOjsI.js";import"./index-BR8_Xxtj.js";import"./ChartSizeDimensions-DRXNeAaP.js";import"./OffsetShower-CYsEpPZo.js";import"./PlotAreaShower-Dt6Ccckl.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ae as default};
