import{r as f,R as e}from"./iframe-BuTq1GDI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CWQHnkYU.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-nFeNXjL9.js";import{C as k}from"./ComposedChart-DnSJfh-P.js";import{X as K}from"./XAxis-DP0H9aj2.js";import{L as v}from"./Legend-B-AJ2NNh.js";import{B as a}from"./Bar-CZIcjIp7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DQJj2wvU.js";import"./Text-CBEIE7g5.js";import"./resolveDefaultProps-BvjC40ji.js";import"./pageBackground-BebQB_1W.js";import"./useId-haS85Qmm.js";import"./ZIndexLayer-eqYDQc0b.js";import"./index-BVmeVX9a.js";import"./index-C37pRckm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DrJ1eC5o.js";import"./throttle-Bg_wxbeM.js";import"./dataEntryStyles-Cr3Y7I5g.js";import"./axisSelectors-C8SZQKCy.js";import"./d3-scale-B-VNUnVY.js";import"./CartesianAxis-DubJAr-q.js";import"./Layer-BRqC8U5C.js";import"./types-CybiymHT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BeHs1Q1W.js";import"./index-CEj4l4tR.js";import"./index-Uz7QCUjK.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-tdUtbdK0.js";import"./index-CvYG7xEe.js";import"./CartesianChart-BC3FDidD.js";import"./chartDataContext-DlVD7MBP.js";import"./CategoricalChart-DnThaA0e.js";import"./Symbols-B1k2vOqr.js";import"./symbol-HuKWM0tX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-F7lpUKWy.js";import"./uniqBy-DEYzcYqJ.js";import"./iteratee-BH09cOPg.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CQul6riI.js";import"./useAnimationId-PmZ8IQYc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nbayO8Mj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6CQyjc5t.js";import"./tooltipContext-DQPd87t6.js";import"./RegisterGraphicalItemId-DoGvUQF1.js";import"./ErrorBarContext-DxkrfkAD.js";import"./SetGraphicalItem-B6ig3Thz.js";import"./getZIndexFromUnknown-Bk9fUZU7.js";import"./useEffectiveDataKey-BAtZCpA-.js";import"./omit-CRLPKLD5.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
