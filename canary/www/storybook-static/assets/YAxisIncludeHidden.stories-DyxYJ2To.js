import{r as f,R as e}from"./iframe-DrMLBoK_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-T-2mqgRO.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BAbfq_sX.js";import{C as k}from"./ComposedChart-BJO1Ycdb.js";import{X as K}from"./XAxis-Cwv8s30V.js";import{L as v}from"./Legend-BPFKtS9p.js";import{B as a}from"./Bar-BNvh1H9V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CJPkFebi.js";import"./Text-CCAk-006.js";import"./resolveDefaultProps-C_WQkFbi.js";import"./DOMUtils-BZ5XTJuP.js";import"./ZIndexLayer-FCgsPrev.js";import"./index-CTLiCJTk.js";import"./index-IA7JdDoU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D2k-junf.js";import"./throttle-2Z3dikKo.js";import"./axisSelectors-CrOsHKKG.js";import"./d3-scale-BHx6I7KL.js";import"./CartesianAxis-CAiEG9fo.js";import"./Layer-DCQ6NbAd.js";import"./types-CTebeEOM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DjVfoptE.js";import"./index-BsgdmWE6.js";import"./index-DwcArmuD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CXZPsywz.js";import"./index-pQjQ56sZ.js";import"./CartesianChart-Dzyi-du7.js";import"./ZIndexPortal-Cic8j-2O.js";import"./CategoricalChart-CZtxZv4h.js";import"./Symbols-BVUslZbl.js";import"./symbol-DCFwQ7z8.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DS33QVkf.js";import"./themeFill-BkM1x4hA.js";import"./useElementOffset-DSzIxfUE.js";import"./uniqBy-Wo4a7xMg.js";import"./iteratee-C7O8kT_z.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-UL5cxJwa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtabDI_D.js";import"./useAnimationId-C1T3lckw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BLsOucL8.js";import"./tooltipContext-D2cAZChc.js";import"./ErrorBarContext-BbnyXFhx.js";import"./activeStyles-CN6y9IyH.js";import"./SetGraphicalItem-u5R4LaUm.js";import"./getZIndexFromUnknown-sTX5wSbO.js";import"./useEffectiveDataKey-Cmfpsn2Q.js";import"./omit-C66T4-Z8.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
