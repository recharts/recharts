import{r as f,R as e}from"./iframe-DeA6Jpe3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-5Hp6S-YS.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BC0f17EQ.js";import{C as k}from"./ComposedChart-Bx8jkPS5.js";import{X as K}from"./XAxis-CWYh7d5o.js";import{L as v}from"./Legend-BtwoIRQl.js";import{B as s}from"./Bar-Cz7ojyAw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D6SDyMBH.js";import"./Layer-EcnCd1Gq.js";import"./resolveDefaultProps-CSkrQNmh.js";import"./Text-D2SjxJqk.js";import"./DOMUtils-Bt_ISucd.js";import"./isWellBehavedNumber-QapkByze.js";import"./Label-DxF7lRqe.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B9FDBqTJ.js";import"./index-COu95pDD.js";import"./index-Cgi5iiaO.js";import"./types-Dc_zINiL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BS64flHf.js";import"./throttle-CrUA5muc.js";import"./RechartsWrapper-B64-BdAv.js";import"./index-DH7_6A6k.js";import"./index-_OzwQHli.js";import"./axisSelectors-D1wvQQnO.js";import"./d3-scale-BpDmqGQL.js";import"./CartesianChart-BM30Ht3L.js";import"./chartDataContext-DUEOLv6k.js";import"./CategoricalChart-BGS1Syzx.js";import"./Symbols-BZlpiwQm.js";import"./symbol-CiFz0GEe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CIvcKMtZ.js";import"./uniqBy-UFmqCWmo.js";import"./iteratee-syIuvkdt.js";import"./tooltipContext-BhzyvrXe.js";import"./AnimatedItems-C9_zvyTE.js";import"./useAnimationId-DmZXjvo1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CQJfdyEy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DhlcDB3a.js";import"./RegisterGraphicalItemId-DYqiPt6w.js";import"./ErrorBarContext-DdrEBPjm.js";import"./GraphicalItemClipPath-BPKm-IHy.js";import"./SetGraphicalItem-D9c-Ll1Q.js";import"./getZIndexFromUnknown-T7xOqdZS.js";import"./graphicalItemSelectors-BdqD8UUE.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
