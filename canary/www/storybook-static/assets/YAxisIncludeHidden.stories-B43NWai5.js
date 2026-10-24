import{r as f,R as e}from"./iframe-CQih25KR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D92DpTLx.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BBwd9R4A.js";import{C as k}from"./ComposedChart-D2Az0r5B.js";import{X as K}from"./XAxis-DatML6Vr.js";import{L as v}from"./Legend-CDR7Zxpu.js";import{B as a}from"./Bar-BxEKzzln.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DtKjJWj0.js";import"./Text-ByeKnFJN.js";import"./resolveDefaultProps-DZXiBHxq.js";import"./pageBackground-B-dTuZL1.js";import"./isWellBehavedNumber-BZsUlmxg.js";import"./useId-BUhtjdKT.js";import"./useBackwardsCompatibleTheme-Cv0bY4c1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0V9Q93e.js";import"./index-lk52KXx5.js";import"./index-DdtFl0i3.js";import"./dataEntryStyles-BMnqm0mo.js";import"./axisSelectors-gqm50JPH.js";import"./throttle-CYod_o09.js";import"./d3-scale-C8349dF6.js";import"./CartesianAxis-B8Q7lXls.js";import"./Layer-BzMCwaud.js";import"./types-NMZqXy0T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-TriIcOtn.js";import"./index-83zVEPqI.js";import"./index-BX29BXND.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BCMHJsHG.js";import"./index-DY8NIj0D.js";import"./CartesianChart-D5IyTQPM.js";import"./chartDataContext-SrRPyl9F.js";import"./CategoricalChart-dLpz1ZCk.js";import"./Symbols-DVPBfB38.js";import"./symbol-DswsDQA7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-EGy64DcV.js";import"./uniqBy-DOqGPGpA.js";import"./iteratee-B3skCKTj.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BLa_G1fN.js";import"./useAnimationId-BuSk-bLT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DwxPMwLi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bl37L_si.js";import"./tooltipContext-rhcrJiXk.js";import"./RegisterGraphicalItemId-BKvpbBB2.js";import"./ErrorBarContext-QTm2eq8O.js";import"./SetGraphicalItem-51m-LnYN.js";import"./getZIndexFromUnknown-Fh88Pu-X.js";import"./useEffectiveDataKey-BJYzr5Gr.js";import"./omit-D760ggAL.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
