import{r as f,R as e}from"./iframe-Bibrvi93.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C5_c0VAl.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-IRdU2Eq4.js";import{C as k}from"./ComposedChart-BDBh58IM.js";import{X as K}from"./XAxis-DJh80Lk8.js";import{L as v}from"./Legend-DbZ6ctwJ.js";import{B as a}from"./Bar-CDmVFixy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-cYp5UoGe.js";import"./Text-BO_ppYYl.js";import"./resolveDefaultProps-DuLA9rob.js";import"./pageBackground-XzqliJgP.js";import"./isWellBehavedNumber-DEJNr0Qw.js";import"./useId-BgICeW4-.js";import"./useBackwardsCompatibleTheme-DU3b-TNc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CR2StRvF.js";import"./index-DMM3MhtL.js";import"./index-30mt-Xh2.js";import"./dataEntryStyles-DDDSAcpo.js";import"./axisSelectors-DSlGSk_i.js";import"./throttle-BYyvulfq.js";import"./d3-scale-Cv38ge3f.js";import"./CartesianAxis-Cuzpv6zD.js";import"./Layer-DE86HNiB.js";import"./types-Bq4foVci.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B9WL6t6z.js";import"./index-DWooAmJS.js";import"./index-DnZq9tde.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bt5qeROs.js";import"./index-BJXhTZS7.js";import"./CartesianChart-CEqCUP4y.js";import"./chartDataContext-uGfw2Upg.js";import"./CategoricalChart-DFHR8N3d.js";import"./Symbols-D6qSh5xw.js";import"./symbol-pYdEuRJm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CvZM-d1p.js";import"./uniqBy-BUWcx4Iz.js";import"./iteratee-c_7BWdlz.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-DrZDHncN.js";import"./useAnimationId-CyOwunze.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tEZ4S3O4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9IZw5gW.js";import"./tooltipContext-DHjZ0LWr.js";import"./RegisterGraphicalItemId-Cbm3m_DF.js";import"./ErrorBarContext-BkgPrLn0.js";import"./SetGraphicalItem-CE5ARGmx.js";import"./getZIndexFromUnknown-C5MCd5Ql.js";import"./useEffectiveDataKey-BbVSYZl7.js";import"./omit-DkLyMs2K.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
