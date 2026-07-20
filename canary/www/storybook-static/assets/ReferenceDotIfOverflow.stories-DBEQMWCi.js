import{R as e}from"./iframe-C7qTZtPI.js";import{R as n}from"./zIndexSlice-BcOfmYYd.js";import{C as s}from"./ComposedChart-C_NHVXsk.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-KtnDhUkb.js";import{X as f}from"./XAxis-CgvkfXIs.js";import{Y as l}from"./YAxis-BIekQKnh.js";import{R as d}from"./ReferenceDot-BoVgUBUU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DLOScDmO.js";import"./index-BL1FkC_h.js";import"./index-cjepjzxR.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Ce1865_D.js";import"./isWellBehavedNumber-D1UA-S7t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-o9fcaOJn.js";import"./index-DzpRwwXn.js";import"./index-Bl3ZtZEI.js";import"./renderedTicksSlice-CqCAs39i.js";import"./axisSelectors-vHpYaHv4.js";import"./d3-scale-BJE91LPh.js";import"./CartesianChart-CYC5HkCy.js";import"./chartDataContext-B2ck_4kp.js";import"./CategoricalChart-DlWBLDD7.js";import"./CartesianAxis-C2LUMKQN.js";import"./Layer-y2Nfuyvg.js";import"./Text-BCZsvPKZ.js";import"./DOMUtils-DEhyc4Rj.js";import"./Label-DS1cnk1C.js";import"./ZIndexLayer-B8jqXSnt.js";import"./types-Bx79eQJf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Dot-nbmu8EHp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
