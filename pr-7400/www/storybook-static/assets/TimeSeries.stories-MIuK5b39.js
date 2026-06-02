import{c as e}from"./iframe-Dy-e7pIM.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-CumYrXMb.js";import{g as y}from"./zIndexSlice-BAzwug6r.js";import{C as g}from"./ComposedChart-CBoFwAQh.js";import{L as x}from"./Line-C_3X6bsH.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-MtjUkFvo.js";import{T as V}from"./Tooltip-Ba3QtjBw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D_U-7Kmb.js";import"./CartesianAxis-kW3aoD-D.js";import"./Layer-BQggJIEv.js";import"./resolveDefaultProps-BOUnRnbS.js";import"./Text-DrCcB5Q6.js";import"./DOMUtils-CWH-10kL.js";import"./isWellBehavedNumber-Bj92k7jm.js";import"./Label-Bd4SV5Lr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DgxZOhGb.js";import"./index-DUyY-sZ6.js";import"./index-B7Kt7cV8.js";import"./types-B745wbwD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D80uYtAJ.js";import"./immer-kVBDWM7h.js";import"./RechartsWrapper-D0mQ-9Gw.js";import"./index-SXoyUqv9.js";import"./index-rCxGgy9o.js";import"./axisSelectors-DHlr3EdZ.js";import"./CartesianChart-Cf77c1Wa.js";import"./chartDataContext-HpYadsZ6.js";import"./CategoricalChart-Csue9Qd9.js";import"./Curve-rRxZ5v9J.js";import"./step-r56XM2D6.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DdYRakW1.js";import"./ActivePoints-Bnfm65-K.js";import"./Dot-DJgC10rz.js";import"./RegisterGraphicalItemId-CWayAjG_.js";import"./ErrorBarContext-N7PuOz_i.js";import"./GraphicalItemClipPath-Birlsn4M.js";import"./SetGraphicalItem-rhS26CgA.js";import"./useAnimationId-D1tL6Rir.js";import"./getRadiusAndStrokeWidthFromDot-CBX6IKOe.js";import"./ActiveShapeUtils-FFunzflv.js";import"./useElementOffset-DUL3oAoP.js";import"./uniqBy-Cl9Zf0qP.js";import"./iteratee-BiQdkXya.js";import"./Cross-fxfBIiUP.js";import"./Rectangle-BL03ALcW.js";import"./Sector-CH-N9u2o.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),R=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):R(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Bt as __namedExportsOrder,Xt as default};
