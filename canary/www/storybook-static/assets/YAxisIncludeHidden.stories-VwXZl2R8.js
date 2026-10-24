import{r as f,R as e}from"./iframe-DZbjLUQo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C0N5iwNJ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-kNjtHJvr.js";import{C as k}from"./ComposedChart-B2VCtYfx.js";import{X as K}from"./XAxis-Cb9he-VA.js";import{L as v}from"./Legend-yulZ2p1K.js";import{B as a}from"./Bar-CMJK2iYb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-QWXq4PsH.js";import"./Text-DfE0Fd2l.js";import"./resolveDefaultProps-7vFM5A8a.js";import"./pageBackground-j9oVi7TB.js";import"./isWellBehavedNumber-C3IgPBb_.js";import"./useId-uis-dzmY.js";import"./useBackwardsCompatibleTheme-BfjKogZ5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CKCEdo-g.js";import"./index--Cvbr4ei.js";import"./index-s3XojKdv.js";import"./dataEntryStyles-OfgH0EAC.js";import"./axisSelectors-SzDg3mS0.js";import"./throttle-Cj_7MghT.js";import"./d3-scale-BGQa_b-A.js";import"./CartesianAxis-Bk45HDsq.js";import"./Layer-Dh4rshAh.js";import"./types-BIiFdC-Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ds3e7SoF.js";import"./index-Fa7FBVrf.js";import"./index-DZ5C6rYB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B7gpneaA.js";import"./index-DGK0wEWr.js";import"./CartesianChart-xRZlZbQd.js";import"./chartDataContext-DvL8FmIv.js";import"./CategoricalChart-D0VTS456.js";import"./Symbols-BG9p6Mv4.js";import"./symbol-COTSugY-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BqEhG3ye.js";import"./uniqBy-COgWTsrM.js";import"./iteratee-DFCPY5kb.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-jlHAdlvX.js";import"./useAnimationId-CK6aB1Dm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle--8czTBQy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ncETWQyV.js";import"./tooltipContext-BxxS945K.js";import"./RegisterGraphicalItemId-DrXewaeQ.js";import"./ErrorBarContext-BdWQYqFr.js";import"./GraphicalItemClipPath-BDvSZObJ.js";import"./SetGraphicalItem-BJ2EKqIC.js";import"./getZIndexFromUnknown-BvjAa1eF.js";import"./useEffectiveDataKey-DRn6J3kp.js";import"./omit-BhIDzA7q.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
