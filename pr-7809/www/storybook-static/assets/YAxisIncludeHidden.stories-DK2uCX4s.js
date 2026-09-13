import{r as f,R as e}from"./iframe-Dv0y1gpD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bad4LtVV.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dcg1qyEP.js";import{C as k}from"./ComposedChart-D5zGBnOn.js";import{X as K}from"./XAxis-DC1yM-4Y.js";import{L as v}from"./Legend-D883gPeo.js";import{B as a}from"./Bar-uDN1xxSg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BjJ47aqL.js";import"./Text-yCn_2ASS.js";import"./resolveDefaultProps-BSnMxCtb.js";import"./DOMUtils-BDbpPHw_.js";import"./isWellBehavedNumber-CSH4eNbA.js";import"./useId-CIoPvc9K.js";import"./useBackwardsCompatibleTheme-D_XOd78A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKxKOknR.js";import"./index-CDdFi7FD.js";import"./index-CuUTphOp.js";import"./RechartsWrapper-DBZPU8BT.js";import"./axisSelectors-CWVN05a4.js";import"./throttle-DRnb1olJ.js";import"./d3-scale-C1I5bktH.js";import"./index-C_-lX3o6.js";import"./index-L6ZabEtj.js";import"./renderedTicksSlice-BROtRsGC.js";import"./index-D08948xk.js";import"./CartesianAxis-XZ9E7gxq.js";import"./Layer-BhVcBCwc.js";import"./types-DPFKMWXW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-By9n1b2a.js";import"./chartDataContext-BgIF_Hcs.js";import"./CategoricalChart-CsjQZa1B.js";import"./Symbols-Bx_FRGYv.js";import"./symbol-DeK-e7tj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ck17hGtu.js";import"./uniqBy-DBrVusL1.js";import"./iteratee-DAD7IavB.js";import"./AnimatedItems-DuOoJz7j.js";import"./useAnimationId-CIZ8sAVQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CBwgxWI1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Du3md58W.js";import"./tooltipContext-CptT7C_U.js";import"./RegisterGraphicalItemId-Cct8Dhhi.js";import"./ErrorBarContext-W61HXda7.js";import"./GraphicalItemClipPath-C2A6ObbO.js";import"./SetGraphicalItem-bcdkfO_p.js";import"./getZIndexFromUnknown-B7vmGG7l.js";import"./useGraphicalItemIdentity-DxPaTWc4.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
