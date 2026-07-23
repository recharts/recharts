import{r as f,R as e}from"./iframe-DDIh6oSg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DvaopW4j.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D80Tj10e.js";import{C as k}from"./ComposedChart-Bwi8FpMM.js";import{X as K}from"./XAxis-BkhNyeaA.js";import{L as v}from"./Legend-DmbCYPk7.js";import{B as s}from"./Bar-C_V-5kbn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DjQVT2FJ.js";import"./Layer-BjK-uYm4.js";import"./resolveDefaultProps-BovobWDa.js";import"./Text-DiDEm6xU.js";import"./DOMUtils-DNdwN9ud.js";import"./isWellBehavedNumber-m0qYgEug.js";import"./Label-7ECcoRBX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CDkdwb16.js";import"./index-Dxp0N8dY.js";import"./index-BAP9iPcz.js";import"./types-CnDlnigw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CodWg03c.js";import"./throttle-Bz-N2EDI.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DOoCLeb6.js";import"./index-BwBS1vT9.js";import"./index-CVFqeXWK.js";import"./axisSelectors-Cj35qO4m.js";import"./d3-scale-DyPEX_SS.js";import"./CartesianChart-B73dWYbg.js";import"./chartDataContext-CsvjkcDn.js";import"./CategoricalChart-B8WXtgJK.js";import"./Symbols-BGmCPg1M.js";import"./symbol-CfTh4g2k.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BTJrpw-d.js";import"./uniqBy-D9_WQstA.js";import"./iteratee-CKafh1uf.js";import"./tooltipContext-BPOtM-wt.js";import"./AnimatedItems-BksUzG9w.js";import"./useAnimationId-Cx3p02Wi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZqE5oO7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSNDz2f-.js";import"./RegisterGraphicalItemId-CqU17xv7.js";import"./ErrorBarContext-Bx5pZcRj.js";import"./GraphicalItemClipPath-BMP70uQv.js";import"./SetGraphicalItem-BS0-pWrT.js";import"./getZIndexFromUnknown-aWcUo4wa.js";import"./graphicalItemSelectors-CiQeUF16.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
