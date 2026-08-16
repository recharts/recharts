import{R as e}from"./iframe-DsrT6Igl.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B8sGkbA_.js";import{R as h}from"./zIndexSlice-h68Ml9Fg.js";import{C as g}from"./ComposedChart-DEqX25eS.js";import{L as x}from"./Line-Co0or1gx.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-xIAfNFu1.js";import{T as V}from"./Tooltip-CH2R-UVQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BXcmAp6r.js";import"./Layer-DLKGrOO6.js";import"./resolveDefaultProps-B9PzJr_D.js";import"./Text-C481n1OT.js";import"./DOMUtils-C9ccNhGG.js";import"./isWellBehavedNumber-BKc-Hacq.js";import"./useBackwardsCompatibleTheme-DXRl_guv.js";import"./Label-Vp0epMck.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CReW--vZ.js";import"./index-CcGDpKo8.js";import"./index-CFQPgMx1.js";import"./types-Dr4WwlRr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CMKIM6y2.js";import"./throttle-CKywVGzs.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CSffRmp6.js";import"./index-TmgrHUX7.js";import"./index-yiXd6Pb-.js";import"./axisSelectors-wSA8VE6u.js";import"./CartesianChart-BZwpOQ8g.js";import"./chartDataContext-CfBgcaN6.js";import"./CategoricalChart-CEyUxV14.js";import"./Curve-BpJvhb6R.js";import"./step-CipQ0fCR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHAzNwyg.js";import"./useAnimationId-B6Rv0dv4.js";import"./ActivePoints-BFA4rG7L.js";import"./Dot-B2h-3AQs.js";import"./RegisterGraphicalItemId-Bitjrotw.js";import"./ErrorBarContext-CvpDkEE-.js";import"./GraphicalItemClipPath-acoCHMXA.js";import"./SetGraphicalItem-vfAWovt3.js";import"./getRadiusAndStrokeWidthFromDot-CeZkjRIS.js";import"./ActiveShapeUtils-ETIvX2m5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-KJy6JXTO.js";import"./uniqBy-CcAT-JF8.js";import"./iteratee-Ch_bSXv9.js";import"./Cross-DdS7YOJT.js";import"./Rectangle-BTeUrZeI.js";import"./util-Dxo8gN5i.js";import"./Sector-DqkrMSqs.js";const Ht={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,It as __namedExportsOrder,Ht as default};
