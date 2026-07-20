import{R as e}from"./iframe-C7qTZtPI.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CgvkfXIs.js";import{R as h}from"./zIndexSlice-BcOfmYYd.js";import{C as g}from"./ComposedChart-C_NHVXsk.js";import{L as x}from"./Line-mFW-YMe2.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BJE91LPh.js";import{T as V}from"./Tooltip-DjXwA_pN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C2LUMKQN.js";import"./Layer-y2Nfuyvg.js";import"./resolveDefaultProps-Ce1865_D.js";import"./Text-BCZsvPKZ.js";import"./DOMUtils-DEhyc4Rj.js";import"./isWellBehavedNumber-D1UA-S7t.js";import"./Label-DS1cnk1C.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8jqXSnt.js";import"./index-BL1FkC_h.js";import"./index-cjepjzxR.js";import"./types-Bx79eQJf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CqCAs39i.js";import"./throttle-DLOScDmO.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-o9fcaOJn.js";import"./index-DzpRwwXn.js";import"./index-Bl3ZtZEI.js";import"./axisSelectors-vHpYaHv4.js";import"./CartesianChart-CYC5HkCy.js";import"./chartDataContext-B2ck_4kp.js";import"./CategoricalChart-DlWBLDD7.js";import"./Curve-DiMbH13e.js";import"./step-THYeIvAN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-HRihbpAW.js";import"./useAnimationId-D4WzgVDK.js";import"./ActivePoints-GVhqjKv2.js";import"./Dot-nbmu8EHp.js";import"./RegisterGraphicalItemId-hstJQcJh.js";import"./ErrorBarContext-BiuHMfT3.js";import"./GraphicalItemClipPath-CJL-G-6t.js";import"./SetGraphicalItem-B6Vsn-QI.js";import"./getRadiusAndStrokeWidthFromDot-DdigNmch.js";import"./ActiveShapeUtils-BJUH9QkP.js";import"./useElementOffset-Cn8CKhYV.js";import"./uniqBy-CXC3IJo1.js";import"./iteratee-lJbmW7AH.js";import"./Cross-r9dRIJ36.js";import"./Rectangle-DuJIsTif.js";import"./util-Dxo8gN5i.js";import"./Sector-Bw-KTzAh.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
