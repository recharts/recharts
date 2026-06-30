import{r as f,R as e}from"./iframe-BSWUJvVD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CPNRWSYb.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dodw6VBB.js";import{C as k}from"./ComposedChart-CU9OL2HY.js";import{X as K}from"./XAxis-CjaWOmHo.js";import{L as v}from"./Legend-DWAZHCCC.js";import{B as s}from"./Bar-CBa9TTQI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Vl9hB9kE.js";import"./CartesianAxis-CVEh4tt_.js";import"./Layer-Cf5OzKEI.js";import"./resolveDefaultProps-BmihZEmA.js";import"./Text-AXOyatW-.js";import"./DOMUtils-BQwhIlov.js";import"./isWellBehavedNumber-BmaIQTH1.js";import"./Label-DXe68yB0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cq8G8FQO.js";import"./index-Dvw34fMT.js";import"./index-B3tdJtlF.js";import"./types-Dnz1a-tR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DqZNOnEy.js";import"./throttle-DttCRvoG.js";import"./RechartsWrapper-DTzsDh4q.js";import"./index-CvaVBha6.js";import"./index-C2hfqVYs.js";import"./axisSelectors-DyTmTh7D.js";import"./d3-scale-C12KvtOu.js";import"./CartesianChart-DPI5HXtq.js";import"./chartDataContext-DSlpgtsU.js";import"./CategoricalChart-DIaxl7pb.js";import"./Symbols-Bya0QLqm.js";import"./symbol-2I3qt-S_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CYaTUNRm.js";import"./uniqBy-BgH0Yxrn.js";import"./iteratee-Dfdp0kkr.js";import"./tooltipContext-qkhEuIOD.js";import"./AnimatedItems-Z4j2jX_N.js";import"./useAnimationId-DQFk0Too.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BwGjqEA9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLmLa7pa.js";import"./RegisterGraphicalItemId-C0E0VwJr.js";import"./ErrorBarContext-CvQvhsxB.js";import"./GraphicalItemClipPath-BiLMWHLg.js";import"./SetGraphicalItem-DXqqCptu.js";import"./getZIndexFromUnknown-Cy7os2R0.js";import"./graphicalItemSelectors-CSHTXu_A.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
