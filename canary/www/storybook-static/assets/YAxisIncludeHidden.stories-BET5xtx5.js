import{r as f,R as e}from"./iframe-D7QPEs6x.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-5bCl6v45.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DRJU9auo.js";import{C as k}from"./ComposedChart-DkVpVicC.js";import{X as K}from"./XAxis-CddzMe5D.js";import{L as v}from"./Legend-D6Wc82vQ.js";import{B as a}from"./Bar-BUie-6je.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dw5oZdmX.js";import"./Text-DA3gX1pv.js";import"./resolveDefaultProps-CRWlv-3y.js";import"./DOMUtils-D_tBKlm6.js";import"./isWellBehavedNumber-DNiV3oks.js";import"./useId-BXkxS-9S.js";import"./useBackwardsCompatibleTheme-D_0RgBTV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BteXgmwI.js";import"./index-CJHqU6XL.js";import"./index-JZUC8P_o.js";import"./RechartsWrapper-i3bpT-Yu.js";import"./axisSelectors-ApgCgdVz.js";import"./throttle-Ct4NpkHt.js";import"./d3-scale-BExrlGPv.js";import"./index-BMjjiw1C.js";import"./index-DHFQnlSZ.js";import"./renderedTicksSlice-laAQTg1Q.js";import"./index-wtCc4zD7.js";import"./CartesianAxis-BAfU-RT3.js";import"./Layer-CQuTPpTF.js";import"./types-2ZxaQrL7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C9MabHj3.js";import"./chartDataContext-B6RxQWBJ.js";import"./CategoricalChart-vhkNV8Yp.js";import"./Symbols-BVsbJhUW.js";import"./symbol-1a_mFcSI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-utW7Y3fN.js";import"./uniqBy-LJLi2f6l.js";import"./iteratee-BozjXSbi.js";import"./AnimatedItems-bKH57gE_.js";import"./useAnimationId-1a47Z03A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIfEIhEu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bfpd-TE6.js";import"./tooltipContext-B7tmfZyH.js";import"./RegisterGraphicalItemId-DcoGQHKz.js";import"./ErrorBarContext-DMXrIZhk.js";import"./GraphicalItemClipPath-BnEsc6E8.js";import"./SetGraphicalItem-Bur606vr.js";import"./getZIndexFromUnknown-Da8hs9xC.js";import"./useGraphicalItemIdentity-Dd9FM8V7.js";import"./dataEntryStyles-BtWpvhbj.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
