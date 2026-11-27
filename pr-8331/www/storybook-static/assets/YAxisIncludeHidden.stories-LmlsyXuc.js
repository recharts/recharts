import{r as f,R as e}from"./iframe-CjYP3ojB.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Bt-Cr0Xc.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cy7CLl9Z.js";import{C as k}from"./ComposedChart-Bpv-zdhu.js";import{X as K}from"./XAxis-Blplutoc.js";import{L as v}from"./Legend-25wTq1-O.js";import{B as a}from"./Bar-C1FdboAL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKyPqSHv.js";import"./get-CjriyByo.js";import"./Label-CaJS6zCA.js";import"./Text-DjT8udYf.js";import"./ZIndexLayer-BebYx5XY.js";import"./index-Dxgip7sp.js";import"./index-ChIvmNbe.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DdQAYS9z.js";import"./redux-toolkit.esm-DZ87n3n2.js";import"./axisSelectors-CPJSjERY.js";import"./diverging-HdrCxTIi.js";import"./CartesianAxis-5Yui6JuQ.js";import"./Layer-BI-kTcme.js";import"./types-D4qLdpQF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CI60Ea5b.js";import"./index-cwlxkqz2.js";import"./index-CvkAYdqK.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-UTu-k1rT.js";import"./index-CpZXho2T.js";import"./fillDefinitions-BUdB36JD.js";import"./CartesianChart-C5nFTC9G.js";import"./chartDataContext-ksA5CmmE.js";import"./CategoricalChart-zTEQjMMp.js";import"./Symbols-CAjbkOs6.js";import"./symbol-Lqckysps.js";import"./path-BBMZd4YL.js";import"./getUniqPayload-DT0aDQpX.js";import"./uniqBy-Bdlm7mbE.js";import"./iteratee-DlQmRZQR.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BvceDOIn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cr5lBSuf.js";import"./useAnimationId-C3slNkW8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DicChUyh.js";import"./tooltipContext-Dqdg2Lnr.js";import"./ErrorBarContext-DD39jyt1.js";import"./activeStyles-D9A5DeQH.js";import"./SetGraphicalItem-B_iWrnd9.js";import"./getZIndexFromUnknown-XpsYo-5r.js";import"./useEffectiveDataKey-BSYT-tLD.js";import"./omit-DxBE6dV-.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
