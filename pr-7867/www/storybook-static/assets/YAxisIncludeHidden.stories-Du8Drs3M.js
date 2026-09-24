import{r as f,R as e}from"./iframe-oenQDkae.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DxjcPAu-.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BolP6taR.js";import{C as k}from"./ComposedChart-CTlu4MhW.js";import{X as K}from"./XAxis-BAapT_j6.js";import{L as v}from"./Legend-DfPA-Tai.js";import{B as a}from"./Bar-_-jL9PZB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BCANxpap.js";import"./Text-D5ThFr-V.js";import"./resolveDefaultProps-BMJPtlp2.js";import"./DOMUtils-Cj13ECRs.js";import"./isWellBehavedNumber-D7fX2EcX.js";import"./useId-CdRDsFJI.js";import"./useBackwardsCompatibleTheme-BdI5Azyq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9GKmy2X.js";import"./index-BSFq4RG1.js";import"./index-MHyjaTC8.js";import"./RechartsWrapper-CzSj_Srx.js";import"./axisSelectors-DouK1BqP.js";import"./throttle-MDW_1VLh.js";import"./d3-scale-DtmS-GpC.js";import"./index-BMWVfK_z.js";import"./index-ZmrPVgl6.js";import"./renderedTicksSlice-CXVO1QKM.js";import"./index-CZXeDDYw.js";import"./CartesianAxis-DeqFFLVl.js";import"./Layer-IdKk3EZa.js";import"./types-DhnB6M_7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Chu1Jshw.js";import"./chartDataContext-CJ85p7Fi.js";import"./CategoricalChart-BmbR8bdU.js";import"./Symbols-JpTNmqfe.js";import"./symbol-B_9Bw_Tg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CWxGqy1I.js";import"./uniqBy-BAQHpx-P.js";import"./iteratee-Cc1JTqL9.js";import"./AnimatedItems-DDFphvv3.js";import"./useAnimationId-BXnU9mnj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-7MVyRVY_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C5gHJrTE.js";import"./tooltipContext-BdZcZffo.js";import"./RegisterGraphicalItemId-CysjmqkX.js";import"./ErrorBarContext-D1o9R7Ud.js";import"./GraphicalItemClipPath-D7deAvGW.js";import"./SetGraphicalItem-BPqapuvy.js";import"./getZIndexFromUnknown-CpBcK-S1.js";import"./useGraphicalItemIdentity-ygWefbro.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
