import{r as f,R as e}from"./iframe-DUnkgIOQ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CvXueHp_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-r-fMsMuk.js";import{C as k}from"./ComposedChart-DmUk4KiU.js";import{X as K}from"./XAxis-CsNzSfhq.js";import{L as v}from"./Legend-q2Udb48u.js";import{B as a}from"./Bar-CG9kSf3Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C4zX0cwX.js";import"./Text-2AgJvCRv.js";import"./resolveDefaultProps-DLNxblaS.js";import"./pageBackground-DK5qsHYc.js";import"./isWellBehavedNumber-dou1peGm.js";import"./useId-NTbtm6dC.js";import"./useBackwardsCompatibleTheme-BSnNSNn_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BhOOp4BW.js";import"./index-Bi2SJwnS.js";import"./index-DrITryDs.js";import"./axisSelectors-zqyiWpFa.js";import"./throttle-BvBsSQNH.js";import"./d3-scale-D5X6Q4ub.js";import"./CartesianAxis-DLgiES_b.js";import"./Layer-B-Hy8zN7.js";import"./types-BzNQj-ku.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B8EBEqyh.js";import"./index-BneZVI-r.js";import"./index-B4osSD3q.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Cnrgjbh6.js";import"./index-CsDFOcOo.js";import"./CartesianChart-5Wn1_YAG.js";import"./chartDataContext-jAnWnb0r.js";import"./CategoricalChart-CgAmM9Jo.js";import"./Symbols-DQWfOt37.js";import"./symbol-DaljVJK8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CA4XVRci.js";import"./uniqBy-iGwqEOr_.js";import"./iteratee-DrlCX8r1.js";import"./activeStyles-BaanO1pI.js";import"./useAnimationId-Dm7GmgCn.js";import"./dataEntryStyles-YmAEtIi5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DHAGZRq2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jD8IoLvy.js";import"./tooltipContext-DEVxnfsx.js";import"./ErrorBarContext-CpGIL_Og.js";import"./GraphicalItemClipPath-YZJU-iu_.js";import"./SetGraphicalItem-C8kjqmoZ.js";import"./getZIndexFromUnknown-noQiCkYq.js";import"./useEffectiveDataKey-BUAhKumu.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
