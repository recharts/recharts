import{r as f,R as e}from"./iframe-1kyud43n.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CNW7YlNA.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cz5lyADs.js";import{C as k}from"./ComposedChart-DbMpgtlU.js";import{X as K}from"./XAxis-hMDf8ppU.js";import{L as v}from"./Legend-DjbGlKzg.js";import{B as s}from"./Bar-wYL5j-f0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C1lR5ca8.js";import"./Text-DH0wfypU.js";import"./resolveDefaultProps-BuZ_Ktq7.js";import"./DOMUtils-PMyjxqYh.js";import"./isWellBehavedNumber-CN4_9Vj1.js";import"./useId-9eWNRi00.js";import"./useBackwardsCompatibleTheme-CSH7ZS6o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-JkDBeXjs.js";import"./index-DSXagRxi.js";import"./index-_AXMDP6s.js";import"./RechartsWrapper-C6lw4dqn.js";import"./index-C2be1uTX.js";import"./index-XjPcI5ms.js";import"./throttle-Hu0TR0tN.js";import"./axisSelectors-l88JnyTW.js";import"./d3-scale-CyS0eQ4Y.js";import"./renderedTicksSlice-DyP9_snd.js";import"./CartesianAxis-ClVpcem5.js";import"./Layer-BIHn5b7O.js";import"./types-CTti3ygY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DvAV2_6S.js";import"./chartDataContext-CIvFsnLa.js";import"./CategoricalChart-BmX_T4yF.js";import"./Symbols-f2mRqTBE.js";import"./symbol-DKOlcRcH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DQHbmpKz.js";import"./uniqBy-B-IGlKv3.js";import"./iteratee-DZnlicew.js";import"./AnimatedItems-DeTQYvPq.js";import"./useAnimationId-RVCSWKWu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BxKv-jXG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-rwurj85y.js";import"./tooltipContext-DuGvi8Du.js";import"./RegisterGraphicalItemId-BzVYbG1B.js";import"./ErrorBarContext-k5tsvNfO.js";import"./GraphicalItemClipPath-CPrhIVsz.js";import"./SetGraphicalItem-ydaT6l1I.js";import"./getZIndexFromUnknown-Br8r1zB2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BRoA24w2.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
