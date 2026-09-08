import{r as f,R as e}from"./iframe-DwQ960mE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BMPG6Jn9.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CRshAYou.js";import{C as k}from"./ComposedChart-njiJAHmg.js";import{X as K}from"./XAxis-C3ApfTuq.js";import{L as v}from"./Legend-Br1vdSSz.js";import{B as a}from"./Bar-o8rL7bWh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BnvMog58.js";import"./Text-D31azkqa.js";import"./resolveDefaultProps-yLRPEvQ6.js";import"./DOMUtils-jWrmId9V.js";import"./isWellBehavedNumber-C8IRNLp2.js";import"./useId-Do6UThpj.js";import"./useBackwardsCompatibleTheme-1nd_EnAF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNwoXSbx.js";import"./index-934SWzTj.js";import"./index-BoR0gZ14.js";import"./RechartsWrapper-CV7KCZiE.js";import"./axisSelectors-BuM-hXsR.js";import"./throttle-CBpng8v-.js";import"./d3-scale-CB-MSXXc.js";import"./index-D_T8BRhY.js";import"./index-Dhp6LnMJ.js";import"./renderedTicksSlice-ByN1eXqa.js";import"./index-Cfk5_Nje.js";import"./CartesianAxis-B1j0Zzpr.js";import"./Layer-nbNG3urG.js";import"./types-BF5horUV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D1gjFL-f.js";import"./chartDataContext-XXv1Y0Lr.js";import"./CategoricalChart-puUF4rGm.js";import"./Symbols-rsnYG1uV.js";import"./symbol-B7Cm16Cp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Btc2x5AZ.js";import"./uniqBy-B5k5jdGw.js";import"./iteratee-C7BmF6bi.js";import"./AnimatedItems--DCjDL7v.js";import"./useAnimationId-CgdCBqIf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-oko1PZRH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQGjc9Is.js";import"./tooltipContext-wowC4QJZ.js";import"./RegisterGraphicalItemId-zN7Xc-Dd.js";import"./ErrorBarContext-C6-51rId.js";import"./GraphicalItemClipPath-BwWJK4tk.js";import"./SetGraphicalItem-DQfhPOxL.js";import"./getZIndexFromUnknown-DlytlEN4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DUZ2mI-D.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
