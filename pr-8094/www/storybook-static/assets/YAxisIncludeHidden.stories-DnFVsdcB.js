import{r as f,R as e}from"./iframe-CKYCIS4O.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-3_O2t6O0.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BVoHtIGl.js";import{C as k}from"./ComposedChart-CcDPS2UA.js";import{X as K}from"./XAxis-BwOdDkr3.js";import{L as v}from"./Legend-BcgxheD9.js";import{B as a}from"./Bar-C7EQz-u5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-V3vvxFs1.js";import"./Text-BLfI62nN.js";import"./resolveDefaultProps-DJardr3Q.js";import"./pageBackground-CEf563-A.js";import"./ZIndexLayer-DQE-ht00.js";import"./index-nd3hpzmK.js";import"./index-JI8M9eCs.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-pOJJRSzh.js";import"./throttle-DZYj3iOj.js";import"./dataEntryStyles-DAzCaz5j.js";import"./axisSelectors-BFrdOsRC.js";import"./d3-scale-Chzts2tO.js";import"./CartesianAxis-8nzccMKS.js";import"./Layer-BD9gaLyO.js";import"./types-CmrXNY74.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BxS1V27b.js";import"./index-SMQozWXj.js";import"./index-DaDG0cBs.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dem0F1Iz.js";import"./index-Da8MkAXq.js";import"./CartesianChart-CI5sjVIs.js";import"./ZIndexPortal-DdwrmGrM.js";import"./CategoricalChart-CFFWqlhP.js";import"./Symbols-CDAoERqX.js";import"./symbol-Dw776g78.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B3lS8dsi.js";import"./uniqBy-DiBJQ8ne.js";import"./iteratee-npSfVfao.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DIy8rGs9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C9OOv2OS.js";import"./useAnimationId-CSk2ZRUZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ci-vluy8.js";import"./tooltipContext-BQUele7p.js";import"./RegisterGraphicalItemId-DJiw9mNN.js";import"./ErrorBarContext-Btx89lB4.js";import"./activeStyles-CNm0YTHp.js";import"./SetGraphicalItem-B3OCK4rf.js";import"./getZIndexFromUnknown-DUsSha-X.js";import"./useEffectiveDataKey-Bc5Nhcfg.js";import"./omit-C7f353ha.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
