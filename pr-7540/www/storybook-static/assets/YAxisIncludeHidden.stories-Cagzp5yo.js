import{r as f,R as e}from"./iframe-DGYc5Evr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D-S3NpvC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CjPpABdt.js";import{C as k}from"./ComposedChart-DPdiH-nu.js";import{X as K}from"./XAxis-v5Hkx9ES.js";import{L as v}from"./Legend-Bm7jm6sf.js";import{B as s}from"./Bar-BgWNK6Um.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-XkVfHgZD.js";import"./Layer-Cp66mevN.js";import"./resolveDefaultProps-BzwDYh32.js";import"./Text-C1RHjt0W.js";import"./DOMUtils-D9lLS2TF.js";import"./isWellBehavedNumber-BpEOcoHg.js";import"./Label-ByCQCza6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BiqJjXGY.js";import"./index-D_ZxU5Q3.js";import"./index-sF9bEsAF.js";import"./types-m9Fzmc4X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BojFd99l.js";import"./throttle-44TCHeAp.js";import"./RechartsWrapper-CM9ry10x.js";import"./index-cJf64k7_.js";import"./index-xTx_eyuL.js";import"./axisSelectors-BNixzxMM.js";import"./d3-scale-DWZ-qO9T.js";import"./CartesianChart-BPYrXhHn.js";import"./chartDataContext-CnthLNs9.js";import"./CategoricalChart-CwbInpB3.js";import"./Symbols-BhoLSFjr.js";import"./symbol-BydJeVAg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXz8BlKI.js";import"./uniqBy-pDvyWWJD.js";import"./iteratee-D1l6G22V.js";import"./tooltipContext-DhQqMsQN.js";import"./AnimatedItems-DpTt0Un9.js";import"./useAnimationId-CRdgro7A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-2UtW3B_i.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0IrxfALl.js";import"./RegisterGraphicalItemId-BYtbpB8Y.js";import"./ErrorBarContext-CDutCjUn.js";import"./GraphicalItemClipPath-D4tdWuXE.js";import"./SetGraphicalItem-sSG1dofq.js";import"./getZIndexFromUnknown-CKy08MvG.js";import"./graphicalItemSelectors-o-2IsEs2.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
