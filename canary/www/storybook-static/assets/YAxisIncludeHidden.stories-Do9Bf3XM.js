import{r as f,R as e}from"./iframe-Cb2PTRZu.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CFTllxPe.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BOcdwE9B.js";import{C as k}from"./ComposedChart-B38G4g5a.js";import{X as K}from"./XAxis-CYL2fqsj.js";import{L as v}from"./Legend-NMCpa0Ey.js";import{B as a}from"./Bar-eitce1Fa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-60x-b7-u.js";import"./Text-D_NeQFRY.js";import"./resolveDefaultProps-38f2qAXo.js";import"./pageBackground-Bn3yH5Mf.js";import"./isWellBehavedNumber-DqADXXOT.js";import"./useId-7AGdzjEK.js";import"./useBackwardsCompatibleTheme-DVeueyf3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CMs0nKoK.js";import"./index-CgcevczK.js";import"./index-D3ECOqH8.js";import"./dataEntryStyles-BA7za2_q.js";import"./axisSelectors-YCR54JUg.js";import"./throttle-3iOH7y6s.js";import"./d3-scale-BEDYL0lJ.js";import"./CartesianAxis-Bd5LwOLq.js";import"./Layer-CYH1X6I5.js";import"./types-A7qt-X3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CGIalbK2.js";import"./index-sJmnv_Ao.js";import"./index-BHmwOcB9.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DJJRHEYU.js";import"./index-DnXVLer0.js";import"./CartesianChart-bwFjxITE.js";import"./chartDataContext-DEoJ-_XA.js";import"./CategoricalChart-yk48FjSr.js";import"./Symbols-C4-XM6Pb.js";import"./symbol-Dv8htkrG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CgOYsezl.js";import"./uniqBy-BBNw9Xn-.js";import"./iteratee-DzkDe0Ct.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-utpSO3wr.js";import"./useAnimationId-BSibkTQy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCmcE3yJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmjVX6xw.js";import"./tooltipContext-CTudmTBU.js";import"./RegisterGraphicalItemId-B9ytj1I9.js";import"./ErrorBarContext-TOpvzWJt.js";import"./SetGraphicalItem-DtRHo2_o.js";import"./getZIndexFromUnknown-Np8QqKEq.js";import"./useEffectiveDataKey-Me0QsLaT.js";import"./omit-BJhtvRGl.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
