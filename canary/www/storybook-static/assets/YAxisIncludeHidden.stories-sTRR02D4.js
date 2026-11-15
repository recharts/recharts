import{r as f,R as e}from"./iframe-aStk4u5G.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-IZNj2QSL.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-fM76ZZLK.js";import{C as k}from"./ComposedChart-DHDQZPyt.js";import{X as K}from"./XAxis-ENAn7eOB.js";import{L as v}from"./Legend-BkZB1ZjK.js";import{B as a}from"./Bar-5Dh1lLRb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CSHZSiX2.js";import"./Text-ByyFOVFg.js";import"./resolveDefaultProps-DDGoEIzP.js";import"./ZIndexLayer-CcTOehup.js";import"./index-D3-ZjHvX.js";import"./index-CudRwpbI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DXerv3y1.js";import"./throttle-DVcVwqMz.js";import"./axisSelectors-DBp9gfhA.js";import"./d3-scale-B6YLYpaJ.js";import"./CartesianAxis-B4XXfFP6.js";import"./Layer-BjWQQh7I.js";import"./types-DjvBJzo1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bb9pf7FB.js";import"./index-D44dfxkc.js";import"./index-C0ZJcZh_.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Ds4ZmDze.js";import"./index-CA0MPyj7.js";import"./fillDefinitions-Daf3k0lp.js";import"./CartesianChart-D7_rHSjg.js";import"./chartDataContext-Dl30_h0X.js";import"./CategoricalChart-C74L4aLC.js";import"./Symbols-CNyA1mlx.js";import"./symbol-C-8FiWil.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cls2pasg.js";import"./uniqBy-CRJApYUW.js";import"./iteratee-DClhMIbQ.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BcmbbFXW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6Wk_c6i.js";import"./useAnimationId-BKAZWpn4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BP2ijoKU.js";import"./tooltipContext-BP9m843V.js";import"./ErrorBarContext-ABxS7lmh.js";import"./activeStyles-CZ0hnhrg.js";import"./SetGraphicalItem-Yj9tvd7_.js";import"./getZIndexFromUnknown-D1mWXeFS.js";import"./useEffectiveDataKey-mYWLQ9Vk.js";import"./omit-8MYgr6Kv.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
