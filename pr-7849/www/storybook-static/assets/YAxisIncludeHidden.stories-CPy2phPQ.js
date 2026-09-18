import{r as f,R as e}from"./iframe-BnwEvHVd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DnmtLm62.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-0uCOCVRk.js";import{C as k}from"./ComposedChart-9rcgHVH2.js";import{X as K}from"./XAxis-DhFvYOTq.js";import{L as v}from"./Legend-BzhiZ7y-.js";import{B as a}from"./Bar-DS3fmTWL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DKFxt1KE.js";import"./Text-COiNjqEn.js";import"./resolveDefaultProps-jnzqtWcb.js";import"./DOMUtils-DMR3fXS7.js";import"./isWellBehavedNumber-f8_DWfMW.js";import"./useId-BMcLep4I.js";import"./useBackwardsCompatibleTheme-eKW0IOYq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BALG2eh-.js";import"./index-iHvm3R8g.js";import"./index-BwBYuMQi.js";import"./RechartsWrapper-BZ464iUK.js";import"./axisSelectors-DzcPpi8v.js";import"./throttle-BMoDiTen.js";import"./d3-scale-RQ0i9OyJ.js";import"./index-2KzukYLG.js";import"./index-B3VczQm-.js";import"./renderedTicksSlice-DPG0-UfT.js";import"./index-CKyU5yK6.js";import"./CartesianAxis-DJc2UaR_.js";import"./Layer-BqkYBUjY.js";import"./types-CpWaLS-D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DbrCyOh2.js";import"./chartDataContext-fkcf5wCl.js";import"./CategoricalChart-BZFbMC-H.js";import"./Symbols-BDau7v6Y.js";import"./symbol-DF9gfUCP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-vRae3IDL.js";import"./uniqBy-CL-auK3D.js";import"./iteratee-0wRIkf1Y.js";import"./AnimatedItems-DFYzdMOG.js";import"./useAnimationId-Bx9pchZd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CX0SZhD6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BQOop8W6.js";import"./tooltipContext-aCkJkkE7.js";import"./RegisterGraphicalItemId-DgVfOOm7.js";import"./ErrorBarContext-DiS9VGRo.js";import"./GraphicalItemClipPath-lDnflq8u.js";import"./SetGraphicalItem-D3Y1kq9t.js";import"./getZIndexFromUnknown-CBmWdKLp.js";import"./useGraphicalItemIdentity-DGhBBybr.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
