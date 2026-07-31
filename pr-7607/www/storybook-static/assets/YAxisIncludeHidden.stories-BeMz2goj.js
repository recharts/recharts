import{r as f,R as e}from"./iframe-BNn_UWWx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BcmUZyL1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DE7GeAH-.js";import{C as k}from"./ComposedChart-iCBZpoeK.js";import{X as K}from"./XAxis-DzOTQwY3.js";import{L as v}from"./Legend-l_ee7Eod.js";import{B as s}from"./Bar-DqqOqk5Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BR5BCwPX.js";import"./Text-BkqgwmxZ.js";import"./resolveDefaultProps-BEtD5DPC.js";import"./DOMUtils-kgC6vmME.js";import"./isWellBehavedNumber-BKaWcWBZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DbGeHIXa.js";import"./index-Bj9l6yop.js";import"./index-D_0E2Dfj.js";import"./RechartsWrapper-CWGaw5tQ.js";import"./index-DbExzsUk.js";import"./index-C_8szxEx.js";import"./throttle-Dubphbjd.js";import"./renderedTicksSlice-CR8grWP_.js";import"./axisSelectors-C-S7b24Y.js";import"./d3-scale-Dfsy3Tmh.js";import"./CartesianAxis-DOE8j2mB.js";import"./Layer-C9Gg67SI.js";import"./types-BuPE8SUX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-MW3Vir6H.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CP3XnrfD.js";import"./chartDataContext-rNOOEU-v.js";import"./CategoricalChart-DKj_eLFg.js";import"./Symbols-DdqJjdJl.js";import"./symbol-duGx-9jG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-P4rP0RLr.js";import"./uniqBy-D-I4fNAI.js";import"./iteratee-DsQTe1TT.js";import"./tooltipContext-BbMYp3dy.js";import"./AnimatedItems-DzsSkQFR.js";import"./useAnimationId-DDbhsfXp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIKDq1_W.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-w8zJ4JkR.js";import"./RegisterGraphicalItemId-BNqd9LzC.js";import"./ErrorBarContext-D8VbAhOk.js";import"./GraphicalItemClipPath-n0yD8gXz.js";import"./SetGraphicalItem-DKdZ-jRK.js";import"./getZIndexFromUnknown-_997__Lh.js";import"./graphicalItemSelectors-6pmbpWWP.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
