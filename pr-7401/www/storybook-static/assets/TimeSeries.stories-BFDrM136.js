import{c as e}from"./iframe-Bhg7B6nu.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-BaFC3En6.js";import{g as y}from"./zIndexSlice-CpfnlaY3.js";import{C as g}from"./ComposedChart-BWL58mxx.js";import{L as x}from"./Line-DnXTv09L.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-CZa5b7JS.js";import{T as V}from"./Tooltip-uYtmtlnI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bdfg8b7E.js";import"./CartesianAxis-D1bYab0n.js";import"./Layer-CWtBt3tO.js";import"./resolveDefaultProps-DYGylzt5.js";import"./Text-B3Epq4Nr.js";import"./DOMUtils-umXRQPav.js";import"./isWellBehavedNumber-CRt7foTE.js";import"./Label-g9fCGbFu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BLUBt3jh.js";import"./index-fTPSImHI.js";import"./index-BeLXdiSX.js";import"./types-CBsC6Zml.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWF9zmW-.js";import"./immer-DB_z4hP2.js";import"./RechartsWrapper-BO-9qVe8.js";import"./index-hZ-hNf3X.js";import"./index-LweJEeHr.js";import"./axisSelectors-CdfzhIk0.js";import"./CartesianChart-B_99cbzZ.js";import"./chartDataContext-CTHxBaCW.js";import"./CategoricalChart-Dr5hcJGP.js";import"./Curve-CepT2fcB.js";import"./step-B9W3HLIp.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BhSP1QaD.js";import"./ActivePoints-DopF7LMV.js";import"./Dot-DS4twGmw.js";import"./RegisterGraphicalItemId-BzH-PWzG.js";import"./ErrorBarContext-D0cT0mEH.js";import"./GraphicalItemClipPath-BljaU2rV.js";import"./SetGraphicalItem-DpMnWL3z.js";import"./useAnimationId-CDEhZOSy.js";import"./getRadiusAndStrokeWidthFromDot-CR_o6rYy.js";import"./ActiveShapeUtils-CZOt3Dfh.js";import"./useElementOffset-ByWie8Pg.js";import"./uniqBy-DE9J9zXb.js";import"./iteratee-_s1w9D9m.js";import"./Cross-D5JF58Wa.js";import"./Rectangle-JbDXy-um.js";import"./Sector-C5Td0knX.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),R=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):R(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
