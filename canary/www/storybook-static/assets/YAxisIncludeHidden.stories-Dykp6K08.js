import{r as f,R as e}from"./iframe-D-xaWYx8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DvS3ruRg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D3SQ2MTt.js";import{C as k}from"./ComposedChart-BU0Kbz0Z.js";import{X as K}from"./XAxis-CMZs7JPg.js";import{L as v}from"./Legend-BMzvzdqw.js";import{B as a}from"./Bar-CbTn4WuX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-1rgKTcFA.js";import"./Text-0YUR20e7.js";import"./resolveDefaultProps-Js9uooEF.js";import"./pageBackground-DVX0bm4d.js";import"./ZIndexLayer-E_Dtb0Mx.js";import"./index-B0Sv0m1A.js";import"./index-CA946KFv.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B6of_7Ld.js";import"./throttle-BmvgL6Rb.js";import"./axisSelectors-DG_H3BOM.js";import"./d3-scale-fHLtEQjZ.js";import"./CartesianAxis-Df6qFn96.js";import"./Layer-BIK5Xkd-.js";import"./types-Bc5RKUKD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-L8xFZ5qK.js";import"./index-DJEWl4Hb.js";import"./index-ByDoJ5qb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BqPcQfd6.js";import"./index-BBNxXXGk.js";import"./CartesianChart-Dmz6gYzC.js";import"./ZIndexPortal-BwYTG8oV.js";import"./CategoricalChart-q3kg2ZZV.js";import"./Symbols-DPqFwa0y.js";import"./symbol-BsZHRk5J.js";import"./path-DyVhHtw_.js";import"./useElementOffset-gwYrbjUM.js";import"./uniqBy-BEACZ9BP.js";import"./iteratee-nU-bJWRc.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-ZtaAtRMQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbRUJHHI.js";import"./useAnimationId-CvbEaa0a.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wywHDhQW.js";import"./tooltipContext-nIaZWK7s.js";import"./dataEntryStyles-Dh5c7_-V.js";import"./ErrorBarContext-ChtZm3AF.js";import"./activeStyles-QtdqAqWx.js";import"./SetGraphicalItem-DMIM43_P.js";import"./getZIndexFromUnknown-BBqLZbMG.js";import"./useEffectiveDataKey-D7oticDs.js";import"./omit-C9bmV5yv.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
