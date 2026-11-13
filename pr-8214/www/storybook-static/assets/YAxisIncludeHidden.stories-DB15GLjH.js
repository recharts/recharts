import{r as f,R as e}from"./iframe-DhvgJ3Tw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BAhPmXz7.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DT7jNbQo.js";import{C as k}from"./ComposedChart-Dp8vMI0e.js";import{X as K}from"./XAxis-DydSoLLm.js";import{L as v}from"./Legend-D2qUqThR.js";import{B as a}from"./Bar-VV6I011L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-lswEF7zo.js";import"./Text-oQHtFAiE.js";import"./resolveDefaultProps-CKLGeLep.js";import"./ZIndexLayer-jkdgENMR.js";import"./index-CU5o85y3.js";import"./index-CQNEDz1o.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-AqVQ4mq9.js";import"./throttle-BWeAvDIL.js";import"./axisSelectors-aIh5be-p.js";import"./d3-scale-DUY8Yxll.js";import"./CartesianAxis-CudRQX5X.js";import"./Layer-B7fk7F56.js";import"./types-L33J7ZDL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bh9hRh5k.js";import"./index-BtmI4qTy.js";import"./index-D2OmVz2d.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-683IwuKd.js";import"./index-D8T5pADG.js";import"./fillDefinitions-Ckysr9fo.js";import"./CartesianChart-BOsacCQH.js";import"./chartDataContext-OAAhd7eo.js";import"./CategoricalChart-C0ZN3rz5.js";import"./Symbols-BU6SDWGm.js";import"./symbol-Dj9V0gE5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CtSBl7eX.js";import"./uniqBy-DUpMmWDv.js";import"./iteratee-CCYpPsyY.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CJFnAm-4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-I38bp9Fj.js";import"./useAnimationId-DBeWeQl6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pVPcv2XP.js";import"./tooltipContext-B9Aw5mks.js";import"./ErrorBarContext-rAqCLm-Y.js";import"./activeStyles-Dbg52UlV.js";import"./SetGraphicalItem-FYK4izOM.js";import"./getZIndexFromUnknown-DCj51Q3j.js";import"./useEffectiveDataKey-NorWb4gC.js";import"./omit-DTYvo1mc.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
