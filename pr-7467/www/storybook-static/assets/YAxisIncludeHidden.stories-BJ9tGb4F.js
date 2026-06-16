import{r as f,R as e}from"./iframe-CnwzBkds.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-iu19I_Qe.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BpzqiTUQ.js";import{C as k}from"./ComposedChart-C1DfHVp4.js";import{X as K}from"./XAxis-DbvG2C4p.js";import{L as v}from"./Legend-DFydtYns.js";import{B as s}from"./Bar-DdNs6xBo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B8n4OfLY.js";import"./CartesianAxis-BmrJk-2O.js";import"./Layer-BZqaMaXh.js";import"./resolveDefaultProps-DV3X3ep6.js";import"./Text-BltVqzsV.js";import"./DOMUtils-BbYzFqpk.js";import"./isWellBehavedNumber-ChDLwcgn.js";import"./Label-CslQeHKW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4T4UXDK.js";import"./index-B17a-Fpl.js";import"./index-DKNFhV5H.js";import"./types-E3CxlAR_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CAlTfeNf.js";import"./immer-BZhv9pDN.js";import"./RechartsWrapper-BxrV5UFS.js";import"./index-DLJqppDu.js";import"./index-5-p3p247.js";import"./axisSelectors-BYBAWXh2.js";import"./d3-scale-CG2_6ote.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DJOSlpeY.js";import"./chartDataContext-BeCpsJVv.js";import"./CategoricalChart-ijSp3dOV.js";import"./Symbols-mZFtFIg9.js";import"./symbol-B9Aqc_CJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-r6gAvG.js";import"./uniqBy-IJ-29Nzx.js";import"./iteratee-5Of9wb96.js";import"./tooltipContext-BS-I8LHO.js";import"./AnimatedItems-Cm-dfr_1.js";import"./useAnimationId-_xLlXMao.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DprBphTu.js";import"./ActiveShapeUtils-_gRdTSDq.js";import"./RegisterGraphicalItemId-CObDD7O1.js";import"./ErrorBarContext-B0xmk8dk.js";import"./GraphicalItemClipPath-B8izwUTw.js";import"./SetGraphicalItem-DAx4YtHH.js";import"./getZIndexFromUnknown-CptywOD8.js";import"./graphicalItemSelectors-YedpX9x1.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
