import{r as f,R as e}from"./iframe-D48Nzg7a.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B8Cc3RzQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Nz3qbcrc.js";import{C as k}from"./ComposedChart-C0XJcgvF.js";import{X as K}from"./XAxis-vF58_Zhz.js";import{L as v}from"./Legend-xAGkk1Yd.js";import{B as s}from"./Bar-C0StZq4c.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dvc5-O45.js";import"./Text-BmDi8oon.js";import"./resolveDefaultProps-X4i4u3XO.js";import"./DOMUtils-MwbqvkJM.js";import"./isWellBehavedNumber-C7xfGJm3.js";import"./useBackwardsCompatibleTheme-D_bQGNKj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C5gHLVh2.js";import"./index-1Ac2q3vk.js";import"./index-DZyliIRq.js";import"./RechartsWrapper-S_Xc00BH.js";import"./index-BpddMd5l.js";import"./index-Dqx9cZ4q.js";import"./throttle-DSE-ZCYP.js";import"./axisSelectors-CnpCzdAy.js";import"./d3-scale-BmAkfb5N.js";import"./renderedTicksSlice-DkSC6crE.js";import"./CartesianAxis-DNEYl1Os.js";import"./Layer-DQQ0bNB2.js";import"./types-DUxuHHgK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DqIlVucu.js";import"./chartDataContext-DiRp1I73.js";import"./CategoricalChart-DWr61JUe.js";import"./Symbols-D4C9qW9l.js";import"./symbol-CsWtmKEW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CWdvxxkR.js";import"./uniqBy-DBAMUzKM.js";import"./iteratee-Dm8hLA5j.js";import"./AnimatedItems-CvUvPizu.js";import"./useAnimationId-C-dtJewN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLR_lgnH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C9yMl5UT.js";import"./tooltipContext-BIjf47GM.js";import"./RegisterGraphicalItemId-DFpeIKrt.js";import"./ErrorBarContext-D4VutYOM.js";import"./GraphicalItemClipPath-BHb4Wa01.js";import"./SetGraphicalItem-aeCrMt0o.js";import"./getZIndexFromUnknown-DrophhrA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C2xNQRdY.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
