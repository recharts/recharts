import{r as f,R as e}from"./iframe-DzzybHr3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CKuS-Mr_.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-APm024yE.js";import{C as k}from"./ComposedChart-9Aj8MpN0.js";import{X as K}from"./XAxis-C2N3vX2E.js";import{L as v}from"./Legend-CoRF27_3.js";import{B as s}from"./Bar-BQxA2sHd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bp9IVHGC.js";import"./Layer-DBuOEsC-.js";import"./resolveDefaultProps-CV8kmKtp.js";import"./Text-CKYGhwj_.js";import"./DOMUtils-CofpyxHf.js";import"./isWellBehavedNumber-DhXkb0Zj.js";import"./Label-Yw7Q0JfB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B65O7Oyl.js";import"./index-CNtIrdbG.js";import"./index-YXsj3yx_.js";import"./types-Ck7x6Nhk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BnoTH0LX.js";import"./throttle-DXJQ7qa7.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BQrYaWuY.js";import"./index-DKv_ekDa.js";import"./index-BbqbzQag.js";import"./axisSelectors-DxliL3D-.js";import"./d3-scale-ikjFpXkq.js";import"./CartesianChart-C60EyfpF.js";import"./chartDataContext-mNy84WxM.js";import"./CategoricalChart-B7eTVHmG.js";import"./Symbols-PzedoV3w.js";import"./symbol-CW6c1FZY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-W4H7iZmy.js";import"./uniqBy-BUqH8mTU.js";import"./iteratee-B57Un0sM.js";import"./tooltipContext-CRNSKdn8.js";import"./AnimatedItems-CJCL0mBl.js";import"./useAnimationId--dSVNcdm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1YG-OgZS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXtuLtCa.js";import"./RegisterGraphicalItemId-r8RRCwhl.js";import"./ErrorBarContext-CW8Stc7O.js";import"./GraphicalItemClipPath-BPmTqE-t.js";import"./SetGraphicalItem-Dv_WYCgN.js";import"./getZIndexFromUnknown-aIczdU7c.js";import"./graphicalItemSelectors-CPc8JmzW.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
