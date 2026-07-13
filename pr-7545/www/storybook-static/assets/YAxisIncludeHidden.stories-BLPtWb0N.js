import{r as f,R as e}from"./iframe-BLb3YVtb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-fcMK6IsP.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DJkgkDD9.js";import{C as k}from"./ComposedChart-Dwy4LS3D.js";import{X as K}from"./XAxis-DkAVE8hF.js";import{L as v}from"./Legend-D8YCbZ3i.js";import{B as s}from"./Bar-CUwSTh0I.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BbjeI4ni.js";import"./Layer-BK8zFmi3.js";import"./resolveDefaultProps-CnVWahPK.js";import"./Text-IRDE_cDN.js";import"./DOMUtils-_5JDSOjo.js";import"./isWellBehavedNumber-DlUvkjSQ.js";import"./Label-DW72PY7h.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-5e79PAf2.js";import"./index-DEpMuUHp.js";import"./index-wtrxX94s.js";import"./types-45FMQ0ZC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-k5ys3P6y.js";import"./throttle-6auUp_qF.js";import"./RechartsWrapper-CUaMC7NX.js";import"./index-DpQytYeA.js";import"./index-Cj1DGWT6.js";import"./axisSelectors-DadMFlsr.js";import"./d3-scale-Bikema70.js";import"./CartesianChart-B4u-2HHw.js";import"./chartDataContext-BoMs8zEW.js";import"./CategoricalChart-Csrvckvr.js";import"./Symbols-BEYQqBvw.js";import"./symbol-C2k3ukzi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CQsk5lW6.js";import"./uniqBy-CVPPpRZP.js";import"./iteratee-BihC2xCb.js";import"./tooltipContext-Ch0xxwM5.js";import"./AnimatedItems-VUSNP4y9.js";import"./useAnimationId-nzk_I_IH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Deq9IpXZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-2WDiJcdZ.js";import"./RegisterGraphicalItemId-Byl2Zyfr.js";import"./ErrorBarContext-CdfKpXhM.js";import"./GraphicalItemClipPath-gmGdN2WI.js";import"./SetGraphicalItem-BWF_fkaR.js";import"./getZIndexFromUnknown-DYI4ThcQ.js";import"./graphicalItemSelectors-CmXLyXrM.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
